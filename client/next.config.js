/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		domains: [
			'hydrilla.in',
			'ibb.co',
			'im3.ezgif.com'
		]
	},
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig