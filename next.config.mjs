import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/],
  
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-images',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 año
        },
      },
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-assets',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
        },
      },
    },
    {
      urlPattern: /\/_next\/data\/.+\/.+\.json$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'next-data',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 24 horas
        },
      },
    }
  ],
};

export default withPWA(pwaConfig)(nextConfig);