import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey, userRole } from "./constant/common";
import { decodedToken } from "./utils/jwtDecode";

type TRole = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  ADMIN: [/^\/dashboard\/admin/],
  DONOR: [/^\/dashboard\/donor/],
};

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

  if (role && roleBasedPrivateRoutes[role as TRole]) {
    const routes = roleBasedPrivateRoutes[role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
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
    // "/donor/:id",
  ],
};
