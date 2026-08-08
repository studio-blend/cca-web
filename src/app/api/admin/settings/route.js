import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getSiteSettings, saveSiteSettings } from "@/lib/cms";

export async function GET() {
  const settings = getSiteSettings();
  return NextResponse.json({ settings });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveSiteSettings(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
