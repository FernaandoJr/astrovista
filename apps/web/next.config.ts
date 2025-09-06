import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    domains: ['ik.imagekit.io', 'tailark.com', 'www.nasa.gov', 'apod.nasa.gov'],
  },
}

export default nextConfig
