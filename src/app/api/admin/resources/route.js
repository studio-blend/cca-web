import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllResources, saveResource, deleteResource } from "@/lib/cms";

export async function GET() {
  const resources = getAllResources();
  return NextResponse.json({ resources });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveResource(body);
    return NextResponse.json({ success: true, resources: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing resource id" }, { status: 400 });
  }

  deleteResource(id);
  const resources = getAllResources();
  return NextResponse.json({ success: true, resources });
}
