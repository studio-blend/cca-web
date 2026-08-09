import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllBanners, getActiveBanners, saveBanner, deleteBanner } from "@/lib/cms";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const activeOnly = searchParams.get("activeOnly") === "true";

  const banners = activeOnly ? getActiveBanners() : getAllBanners();
  return NextResponse.json({ banners });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveBanner(body);
    return NextResponse.json({ success: true, banners: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing banner id" }, { status: 400 });

    deleteBanner(id);
    const banners = getAllBanners();
    return NextResponse.json({ success: true, banners });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
