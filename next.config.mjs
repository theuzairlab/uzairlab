/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zetasoft.org',
      },
    ],
  },
};

export default nextConfig; 