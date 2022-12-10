/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		  domains: [
			  'hydrilla.in',
			  'ibb.co',
			  'im3.ezgif.com',
			  'drive.google.com',
			  'flic.kr',
			  'www.flickr.com',
			  'i.postimg.cc',
			  'images.unsplash.com'
		  ]
	  },
	reactStrictMode: true,
	swcMinify: true,
  }
  
  module.exports = nextConfig