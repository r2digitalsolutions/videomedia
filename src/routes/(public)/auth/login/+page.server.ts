import { db } from "$lib/server/db";
import { validateUsername, validatePassword } from "$lib/utils/auth";
import { verify } from "@node-rs/argon2";
import { fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import * as auth from "$lib/server/auth";
import * as table from "$lib/server/db/schema";
import { redirectToHome } from "$lib/settings/vars";

export const load = (async () => {
  return {
    title: "Seamless Login for Exclusive Access",
    description: "Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.",
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  login: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    if (!validateUsername(username)) {
      return fail(400, {
        message: 'Invalid username (min 3, max 31 characters, alphanumeric only)'
      });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: 'Invalid password (min 6, max 255 characters)' });
    }

    const results = await db.select().from(table.user).where(eq(table.user.username, username));

    const existingUser = results.at(0);
    if (!existingUser) {
      return fail(400, { message: 'Incorrect username or password' });
    }

    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });
    if (!validPassword) {
      return fail(400, { message: 'Incorrect username or password' });
    }

    const sessionToken = auth.generateSessionToken();
    const session = await auth.createSession(sessionToken, existingUser.id);
    auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);

    return redirect(302, redirectToHome);
  },
};