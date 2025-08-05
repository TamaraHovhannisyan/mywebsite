/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/mywebsite",
  assetPrefix: "/mywebsite/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
