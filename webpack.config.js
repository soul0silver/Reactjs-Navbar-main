// webpack.config.js

module.exports = {
  resolve: {
    fallback: {
      "path": false,
      "os": false,
      "crypto": false
    },
  },

};
