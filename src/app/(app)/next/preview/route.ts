import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { getPathFromSlug } from "@/lib/serverUrl";

export async function GET(request: Request) {
  const payload = await getPayload();
  const { user } = await payload.auth({ headers: request.headers });
  if (!user) return new Response("Log in to the admin to preview drafts", { status: 403 });

  const slug = new URL(request.url).searchParams.get("slug");
  (await draftMode()).enable();
  redirect(getPathFromSlug(slug));
}
