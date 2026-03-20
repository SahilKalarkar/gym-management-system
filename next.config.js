/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable SSG for admin pages
  generateStaticParams: async () => [],
  // Skip _app prerendering
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig;
