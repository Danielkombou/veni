import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack ignores the Prisma client runtime due to dynamic filesystem access
};

export default nextConfig;
