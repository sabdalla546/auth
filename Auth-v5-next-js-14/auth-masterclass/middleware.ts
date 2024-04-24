import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  publicRoutes,
  authRoutes,
  apiRoutePrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  /*const isLoggedIn = !!req.auth;
  console.log("is logged in ", isLoggedIn);
  console.log("Route", req.nextUrl.pathname);*/
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiRoutePrefix);
  const isPuplicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  if (isApiAuthRoute) {
    return null;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }
  if (!isLoggedIn && !isPuplicRoutes) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  //console.log(isLoggedIn, isApiAuthRoute, isPuplicRoutes, isAuthRoutes);
  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
