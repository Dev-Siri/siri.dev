import { getSession } from "auth-astro/server";

import type { APIContext } from "astro";
import { addGuestBookEntry, getGuestbookEntries } from "../../utils/guestbook";

export const prerender = false;

export async function post({ request, redirect }: APIContext) {
  const formData = await request.formData();

  const comment = formData.get("comment");

  const session = await getSession(request);

  if (!comment || comment instanceof Blob || !session || !session.user || !session.user.name) return redirect("/guestbook", 303);

  await addGuestBookEntry({
    username: session.user.name,
    createdAt: new Date().toISOString(),
    comment,
  });

  return redirect("/guestbook", 303);
}

export async function get() {
  const guestbookEntries = await getGuestbookEntries();

  return new Response(JSON.stringify(guestbookEntries));
}
