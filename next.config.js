/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  withBundleAnalyzer,
  images: {
    loader: 'imgix',
    path: 'https://image.tmdb.org/t/p/w300',
  }
}

module.exports = nextConfig
