import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getBlogPostBySlug, saveBlogPost, deleteBlogPost } from "@/lib/cms";

export async function GET(request, { params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PUT(request, { params }) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug: originalSlug } = await params;

  try {
    const body = await request.json();
    const result = saveBlogPost({ ...body, originalSlug });
    return NextResponse.json({ success: true, post: result });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const success = deleteBlogPost(slug);

  if (success) {
    return NextResponse.json({ success: true, message: "Post deleted" });
  }

  return NextResponse.json({ error: "Post not found or could not be deleted" }, { status: 404 });
}
