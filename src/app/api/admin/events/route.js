import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllEvents, saveEvent, deleteEvent } from "@/lib/cms";

export async function GET() {
  const events = getAllEvents();
  return NextResponse.json({ events });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveEvent(body);
    return NextResponse.json({ success: true, events: updated });
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
    return NextResponse.json({ error: "Missing event id" }, { status: 400 });
  }

  deleteEvent(id);
  const events = getAllEvents();
  return NextResponse.json({ success: true, events });
}
