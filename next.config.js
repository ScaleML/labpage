/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // Uncomment and configure basePath if deploying to a subdirectory
  // basePath: '/your-repo-name',
  webpack: (config, { isServer }) => {
    // Fix for 'fs' module on client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
