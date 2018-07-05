// See https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/
const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;
// useDefaultConfig[env].resolve.modules.push(path.resolve('src'));

if (env === 'prod' || env === 'dev') {
  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve(environmentPath()),
    "@theme": path.resolve('./src/theme/')
  };
} else {
  // Default to dev config
  useDefaultConfig[env] = useDefaultConfig.dev;
  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve(environmentPath()),
    "@theme": path.resolve('./src/theme/')
  };
}

function environmentPath() {
  let filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};