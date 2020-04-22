/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    io : {
      init: { }, // passed to engine.io
      namespace: {
        '/': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
        '/example': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_000420';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
