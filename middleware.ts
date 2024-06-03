//import { clerkMiddleware } from "@clerk/nextjs/server";

//export default clerkMiddleware({});


import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/root/company',
        '/root/ecosystem',
    ],
    ignoredRoutes:[
        '/root'
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};