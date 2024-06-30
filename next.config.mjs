/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true,  // <=== disables image optimization for static exports
    },
};

export default nextConfig;
