import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { saveUploadedFile } from "@/lib/cms";

export async function POST(request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const publicUrl = await saveUploadedFile(file);
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
