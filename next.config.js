/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @import "app/styles/mixins.scss";
      `,
  },
};

module.exports = nextConfig;
