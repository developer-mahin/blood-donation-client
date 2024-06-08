import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey, userRole } from "./constant/common";
import { decodedToken } from "./utils/jwtDecode";

const authRoutes = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get(authKey);

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname === "/donor") {
    return NextResponse.next();
  }

  let decodedData = null;

  if (accessToken) {
    decodedData = decodedToken(accessToken.value) as any;
  }

  if (!decodedData) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;

  if (pathname === "/profile") {
    if (role === userRole.DONOR || role === userRole.ADMIN) {
      return NextResponse.next();
    }
  }

  if (pathname === "/dashboard/admin/users") {
    if (role === userRole.ADMIN) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/:page*",
    "/login",
    "/register",
    "/profile",
    "/donor/:id",
  ],
};
