// middleware.ts
import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";



const publicRoute=createRouteMatcher(['/sign-in(.*)','/sign-up(.*)','/'])   //here we are making these routes public

export default  clerkMiddleware(async(auth,req)=>{
    if(!publicRoute(req)){    //if the route is not public, then we need to protect it
        await auth.protect();
    }


});



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};