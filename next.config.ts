/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ss-envirocare",
  assetPrefix: "/ss-envirocare",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
