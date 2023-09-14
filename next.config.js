/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshPlugin"
      );
    }
    return config;
  },
};

module.exports = nextConfig;
