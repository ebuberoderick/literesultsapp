/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://skillapp.literesults.net', "https://","skillapp.literesults.net"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillapp.literesults.net',
            },
        ],
    }
};

export default nextConfig;
