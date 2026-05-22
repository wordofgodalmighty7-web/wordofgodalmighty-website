import type { NextConfig } from "next";

const productionHost = "wordofgodalmighty.store";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${productionHost}` }],
        destination: `https://${productionHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;