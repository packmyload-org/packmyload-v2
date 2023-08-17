/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
};

module.exports = nextConfig;
