/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "balenciaga.dam.kering.com",
      }
    ],
  }
}

module.exports = nextConfig

