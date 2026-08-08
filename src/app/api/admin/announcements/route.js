import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAnnouncement, saveAnnouncement } from "@/lib/cms";

export async function GET() {
  const announcement = getAnnouncement();
  return NextResponse.json({ announcement });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveAnnouncement(body);
    return NextResponse.json({ success: true, announcement: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
