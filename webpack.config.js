var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

// to match the basePath in tsconfig.json, we add src as a module path, which means we can use
// module style imports for our code. Without this, an import that typescript thinks is valid, like
// useDefaultConfig.dev.resolve.modules.push(path.resolve('src'));
// useDefaultConfig.prod.resolve.modules.push(path.resolve('src'));
useDefaultConfig.dev.resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve('./src/environments/'),
    "@theme": path.resolve('./src/theme/')
};

useDefaultConfig.prod.resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve('./src/environments/'),
    "@theme": path.resolve('./src/theme/')
};

/**
 * export the update ionic webpack configs (this still includes both dev & prod webpack configs)
 */
module.exports = function () {
  return useDefaultConfig;
};