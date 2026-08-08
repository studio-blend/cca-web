import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllBlogPosts, saveBlogPost } from "@/lib/cms";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const isPublic = searchParams.get("public") === "true";

  if (!isPublic) {
    const authed = await isAuthenticated();
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const posts = getAllBlogPosts({ includeDrafts: !isPublic });
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = saveBlogPost(body);
    return NextResponse.json({ success: true, post: result });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
