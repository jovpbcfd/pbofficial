/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'panalobetofficial.com',
				pathname: '/images/**', 
			},
		],
	},

	async rewrites() {
		return [

			{
				source: '/', 
				destination: '/index.html',
			  },
	
		  {
			source: '/live-casino', 
			destination: '/live-casino.html',
		  },
		  {
			source: '/fishing-game', 
			destination: '/fishing-game.html',
		  },

		  {
			source: '/slot-games', 
			destination: '/slot-games.html',
		  },  
		  {
			source: '/cockfight', 
			destination: '/cockfight.html',
		  },
		  {
			source: '/promotion', 
			destination: '/promotion.html',
		  },
		  {
			source: '/contact', 
			destination: '/contact.html',
		  },
		];
	  },
};

export default nextConfig;
