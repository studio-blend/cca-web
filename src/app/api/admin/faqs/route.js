import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllFAQs, saveFAQ, deleteFAQ } from "@/lib/cms";

export async function GET() {
  const faqs = getAllFAQs();
  return NextResponse.json({ faqs });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveFAQ(body);
    return NextResponse.json({ success: true, faqs: updated });
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
    return NextResponse.json({ error: "Missing FAQ id" }, { status: 400 });
  }

  deleteFAQ(id);
  const faqs = getAllFAQs();
  return NextResponse.json({ success: true, faqs });
}
