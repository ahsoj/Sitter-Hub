/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/ex_api/v1/:path*',
          destination:
            process.env.NODE_ENV === 'production'
              ? `https://sitterhub.onrender.com/api/v1/:path*`
              : `http://127.0.0.1:5000/api/v1/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
