// next.config.js

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  async headers() {
    let configValue =
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.ggpht.com http://*.googleusercontent.com blob";
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: configValue,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
