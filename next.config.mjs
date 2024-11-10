/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/search",
        destination: "/search/character",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
