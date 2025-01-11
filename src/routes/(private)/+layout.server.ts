import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { redirectToLogin } from "$lib/settings/vars";

export const load = (async ({ locals, }) => {
  if (!locals.user) {
    return redirect(307, redirectToLogin);
  }

  return {
    user: locals.user,
    session: locals.session,
  };
}) satisfies LayoutServerLoad;