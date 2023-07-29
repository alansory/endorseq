/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent-cgk1-2.xx.fbcdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.statically.io',
        port: '',
        pathname: '/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
    ],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
  async redirects() {
    return [
      {
        source: '/statistics',
        destination: '/statistics/types',
        permanent: true,
      },
    ];
  },
};


module.exports = nextConfig
