/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'standalone',
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['*'],
	},
}

module.exports = nextConfig
