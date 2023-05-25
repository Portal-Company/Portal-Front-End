/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "example.com",
      "uploads-file-portal-das-escolas.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
