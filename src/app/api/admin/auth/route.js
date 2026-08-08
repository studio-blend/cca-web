import { NextResponse } from "next/server";
import { verifyPasscode, setAdminSession, clearAdminSession, isAuthenticated } from "@/lib/auth";

export async function GET() {
  const authed = await isAuthenticated();
  return NextResponse.json({ authenticated: authed });
}

export async function POST(request) {
  try {
    const { passcode } = await request.json();
    const isValid = await verifyPasscode(passcode);

    if (isValid) {
      await setAdminSession();
      return NextResponse.json({ success: true, message: "Authentication successful" });
    }

    return NextResponse.json(
      { success: false, message: "Invalid admin passcode" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ success: true, message: "Logged out successfully" });
}
