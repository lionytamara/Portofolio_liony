/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // Tambahkan dua baris ini agar CSS dan Assets tidak Error 404
  basePath: '/Portofolio_liony',
  assetPrefix: '/Portofolio_liony/',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
