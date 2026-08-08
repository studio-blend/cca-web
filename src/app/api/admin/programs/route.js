import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllPrograms, saveProgram, deleteProgram } from "@/lib/cms";

export async function GET() {
  const programs = getAllPrograms();
  return NextResponse.json({ programs });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveProgram(body);
    return NextResponse.json({ success: true, programs: updated });
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
    return NextResponse.json({ error: "Missing program id" }, { status: 400 });
  }

  deleteProgram(id);
  const programs = getAllPrograms();
  return NextResponse.json({ success: true, programs });
}
