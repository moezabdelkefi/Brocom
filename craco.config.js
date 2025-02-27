module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
        if (oneOfRule) {
          const sassRule = oneOfRule.oneOf.find(
            (rule) => rule.test && rule.test.toString().includes('scss')
          );
          if (sassRule) {
            const sassLoader = sassRule.use.find(
              (loader) => loader.loader && loader.loader.includes('sass-loader')
            );
            if (sassLoader) {
              sassLoader.options.implementation = require('sass');
            }
          }
        }
        return webpackConfig;
      },
    },
  };