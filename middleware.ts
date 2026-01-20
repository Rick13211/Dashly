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
  matcher: ["/dashboard/:path*"] 
};