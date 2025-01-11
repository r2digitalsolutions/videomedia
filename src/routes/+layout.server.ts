import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals, }) => {
  return {
    language: 'en',
    translations: {},
  };
}) satisfies LayoutServerLoad;