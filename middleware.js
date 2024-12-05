import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth(async (request) => {
  if (!request.auth?.user && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(request.nextUrl.origin);
  }
});

export const config = {
  matcher: ["/((?!api|signin|signout|admin|_next/static|_next/image|favicon.ico).*)"],
};
