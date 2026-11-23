/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/waitlist",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
