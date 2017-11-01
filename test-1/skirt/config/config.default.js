'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1509524543604_599';

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '111111',
      // database
      database: 'shopping',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  return config;
};
