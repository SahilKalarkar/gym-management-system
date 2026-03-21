/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    trailingSlash: true,
    // ✅ FIX: Empty turbopack config = Turbopack happy
    turbopack: {}
}

module.exports = nextConfig;
