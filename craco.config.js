// craco.config.js
const CracoLessPlugin = require('craco-less');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack: {
  //   configure: (webpackConfig) => {
  //     webpackConfig.module.rules.forEach(rule => {
  //       if (rule.oneOf) {
  //         rule.oneOf.unshift({
  //           test: /\.mjs$/,
  //           enforce: 'pre',
  //           use: ['source-map-loader'],
  //           exclude: /node_modules\/@mediapipe\/tasks-vision/,
  //         });
  //       }
  //     });
  //     return webpackConfig;
  //   },
  // },
};

