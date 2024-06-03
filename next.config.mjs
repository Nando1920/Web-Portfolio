/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eventr.softpauer.com",
      },
      {
        protocol: "https",
        hostname: "fernando-portfolio-bucket.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
