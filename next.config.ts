import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack ignores the Prisma client runtime due to dynamic filesystem access
  // Using standalone output mode for better compatibility
  output: "standalone",
};

export default nextConfig;
