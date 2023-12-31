/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // trailingSlash: true, // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // distDir: 'dist', // Optional: Change the output directory `out` -> `dist`
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
