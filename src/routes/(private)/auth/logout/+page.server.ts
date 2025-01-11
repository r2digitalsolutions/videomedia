import type { PageServerLoad } from "./$types";
import * as auth from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";

export const load = (async (event) => {
  if (event.locals.user) {
    auth.deleteSessionTokenCookie(event);
  }

  return redirect(302, '/');
}) satisfies PageServerLoad;