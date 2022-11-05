

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/contents/homePage',
				permanent:true
			},
		]
	},
}

const withTM = require('next-transpile-modules')([
	'antd-mobile'
]);

module.exports = withTM(nextConfig)
