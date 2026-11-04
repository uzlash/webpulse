import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/content/get";

// Target of a Sanity GROQ webhook (on create/update/delete), signed with SANITY_REVALIDATE_SECRET.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Missing SANITY_REVALIDATE_SECRET" }, { status: 500 });

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
  if (!isValidSignature) return NextResponse.json({ message: "Invalid signature" }, { status: 401 });

  revalidateTag(SANITY_TAG, "max");
  return NextResponse.json({ revalidated: true, type: body?._type ?? null });
}
