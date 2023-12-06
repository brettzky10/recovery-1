import { authMiddleware } from "@clerk/nextjs";
 

//get rid of /api/uploadthing from public routes
export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook", "/api/uploadthing"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};