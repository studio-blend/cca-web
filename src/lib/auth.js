import { cookies } from "next/headers";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "admin123";
const AUTH_COOKIE_NAME = "cca_admin_session";
const SESSION_TOKEN = "authenticated_admin_session_cca_2026";

export async function verifyPasscode(passcode) {
  return passcode === ADMIN_PASSCODE;
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  return token === SESSION_TOKEN;
}
