import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllLeads, saveLead, deleteLead } from "@/lib/cms";

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = getAllLeads();
  return NextResponse.json({ leads });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newLead = saveLead(body);
    return NextResponse.json({ success: true, lead: newLead });
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
    return NextResponse.json({ error: "Missing lead id" }, { status: 400 });
  }

  deleteLead(id);
  const leads = getAllLeads();
  return NextResponse.json({ success: true, leads });
}
