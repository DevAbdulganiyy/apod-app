/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
            port: '',
            pathname: '/apod/**',
          },
          
        ],
      },
      typescript: {

        ignoreBuildErrors: true,
      },
      eslint:{
        ignoreBuildErrors:true
      }
};

export default nextConfig;
