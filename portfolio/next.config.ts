import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};
module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
}

export default nextConfig;
