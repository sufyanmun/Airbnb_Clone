/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ['pandotrip.com','logodownload.org','images.pexels.com','a0.muscache.com','muscache.com'],
  },
};
