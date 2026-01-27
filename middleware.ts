import { withAuth } from "next-auth/middleware";

export default withAuth(
  // This function runs after authentication
  function middleware(req) {
    // You can add custom logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Returns true if a token exists
    },
    pages: {
      signIn: "/auth/signup", // Redirect here if not logged in
    },
  }
);

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - auth (authentication pages)
   * - share (public notes)
   * - The root path (/) [Note the '$' at the end]
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|share|$).*)'],
};