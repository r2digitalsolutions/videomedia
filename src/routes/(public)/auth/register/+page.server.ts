import type { Actions, PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { generateUserId, validateUsername, validatePassword } from "$lib/utils/auth";
import { hash } from "@node-rs/argon2";
import { fail, redirect } from "@sveltejs/kit";
import * as auth from "$lib/server/auth";
import * as table from "$lib/server/db/schema";
import { redirectToHome } from "$lib/settings/vars";

export const load = (async () => {
  return {
    title: "Seamless register for Exclusive Access",
    description: "Immerse yourself in a hassle-free register journey with our intuitively designed register form. Effortlessly access your account.",
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  register: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    if (!validateUsername(username)) {
      return fail(400, { message: 'Invalid username' });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: 'Invalid password' });
    }

    const userId = generateUserId();
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });

    try {
      await db.insert(table.user).values({ id: userId, username, passwordHash });

      const sessionToken = auth.generateSessionToken();
      const session = await auth.createSession(sessionToken, userId);
      auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
    } catch (e) {
      return fail(500, { message: 'An error has occurred' });
    }

    return redirect(302, redirectToHome);
  }
};