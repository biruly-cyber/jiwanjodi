
module.exports = {
  reactStrictMode: true, // Enables React strict mode
  env: {
    // Environment variables
    API_URL: 'https://api.example.com',
  },
  // Custom webpack configuration
  webpack: (config: any, { buildId, dev, isServer, defaultLoaders, webpack }: any) => {
    // Modify the config object
    return config;
  },
  // Custom server runtime configuration
  serverRuntimeConfig: {
    secret: 'my-secret',
  },
  // Custom public runtime configuration
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
};
