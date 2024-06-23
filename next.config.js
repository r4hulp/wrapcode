


const { withContentlayer } = require('next-contentlayer')
// create config to support mp3 files 
// next.config.js
const exportsObject = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(mp3|wav|m4a)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/audio/",
            outputPath: "static/audio/",
            name: "[name].[ext]",
          },
        },
      });
      return config;
    },
  };

module.exports = withContentlayer(exportsObject)