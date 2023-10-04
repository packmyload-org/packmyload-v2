// next.config.js

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
    ],
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
    return [
      {
        // Set Cache-Control for static assets to 30 days (1 month)
        source: "/static/:path*", // Adjust the path pattern as needed
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000", // 30 days in seconds
          },
        ],
      },
    ];
  },
};
