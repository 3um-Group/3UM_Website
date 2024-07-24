/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",  // Error ->Page /api/auth/[auth0]/route is missing exported function generateStaticParams() , which is required with output: export config.
    images: {
        unoptimized: true,  // <=== disables image optimization for static exports
    },
    distDir: 'out',
};

export default nextConfig;
