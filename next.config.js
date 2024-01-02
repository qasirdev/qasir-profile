/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'default',
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: false,
	}
}

module.exports = nextConfig
