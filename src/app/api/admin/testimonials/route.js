import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllTestimonials, saveTestimonial, deleteTestimonial } from "@/lib/cms";

export async function GET() {
  const testimonials = getAllTestimonials();
  return NextResponse.json({ testimonials });
}

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = saveTestimonial(body);
    return NextResponse.json({ success: true, testimonials: updated });
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
    return NextResponse.json({ error: "Missing testimonial id" }, { status: 400 });
  }

  deleteTestimonial(id);
  const testimonials = getAllTestimonials();
  return NextResponse.json({ success: true, testimonials });
}
