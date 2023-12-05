/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @import "app/styles/mixins.scss";
      @import "app/styles/variables.scss";
      `,
  },
};

module.exports = nextConfig;
