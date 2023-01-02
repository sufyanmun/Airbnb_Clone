/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = { nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logodownload.org',
        port: '',
        pathname: '/wp-content/uploads/2016/10/airbnb-logo-10.png',
      },
    ],
  },
};
