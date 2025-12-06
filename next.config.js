/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: 'default',
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  // Removemos output: 'export' para Vercel
  // output: 'export',
}

module.exports = nextConfig
