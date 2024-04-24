/**
 *puplic routes
 *@type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 *routes use for auth
 *@type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

// always allowed
/**
 *routes use for auth
 *@type {string}
 */
export const apiRoutePrefix = "/api/auth";
/**
 *redirect after logged in
 *@type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
