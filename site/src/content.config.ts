import { defineCollection, z } from 'astro:content';
import { glob, type Loader, type LoaderContext } from 'astro/loaders';
import yaml from 'yaml';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RESOURCES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../resources');

/**
 * Custom loader: one entry per resources/<id>/resource.yaml.
 * This makes the manifest the single source of truth for part ordering.
 */
function resourceManifestLoader(): Loader {
  return {
    name: 'resource-manifests',
    async load({ store }: LoaderContext) {
      store.clear();
      for (const dir of fs.readdirSync(RESOURCES_DIR)) {
        const manifest = path.join(RESOURCES_DIR, dir, 'resource.yaml');
        if (dir.startsWith('_') || !fs.existsSync(manifest)) continue;
        const data = yaml.parse(fs.readFileSync(manifest, 'utf8'));
        if (data?.id !== dir) {
          throw new Error(`resource.yaml id "${data?.id}" != folder name "${dir}" in ${manifest}`);
        }
        store.set({ id: dir, data });
      }
    },
  };
}

const slides = defineCollection({
  loader: glob({ pattern: '**/slides/*.md', base: RESOURCES_DIR }),
  schema: z.object({
    kicker: z.string().optional(),
    kind: z.enum(['cover', 'center', 'content']).default('content'),
    notes: z.array(z.string()).default([]),
  }),
});

const parts = defineCollection({
  loader: glob({ pattern: '*/*/index.md', base: RESOURCES_DIR }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    objectives: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    duration: z.string().optional(),
  }),
});

const resources = defineCollection({
  loader: resourceManifestLoader(),
});

export const collections = { slides, parts, resources };
