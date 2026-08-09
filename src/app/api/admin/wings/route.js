import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllWings, saveWing, deleteWing } from "@/lib/cms";

export async function GET() {
  const wings = getAllWings();
  return NextResponse.json({ wings });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveWing(body);
    return NextResponse.json({ success: true, wings: updated });
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
    if (!id) return NextResponse.json({ error: "Missing wing id" }, { status: 400 });

    deleteWing(id);
    const wings = getAllWings();
    return NextResponse.json({ success: true, wings });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
