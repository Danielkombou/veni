import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next treats 127.0.0.1 as cross-origin against localhost and refuses the
  // dev HMR socket, which leaves the page as static HTML. Health checks and
  // browsers in this environment use both hosts.
  allowedDevOrigins: ["127.0.0.1"],
  // Turbopack ignores the Prisma client runtime due to dynamic filesystem access
  // Using standalone output mode for better compatibility
  output: "standalone",
};

export default nextConfig;
