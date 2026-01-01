/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Only add basePath and assetPrefix for production builds
  ...(process.env.NODE_ENV === 'production' && {
    basePath: "/portfolio", // Replace with your repo name
    assetPrefix: "/portfolio/public",
  }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig