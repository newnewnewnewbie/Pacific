const withImages = require("next-images");

module.exports = withImages({
  webpack(config, options) {
    config.resolve.modules.push(__dirname); //절대경로 설정 코드

    return config;
  },
});
