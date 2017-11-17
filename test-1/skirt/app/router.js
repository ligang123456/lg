'use strict';

module.exports = app => {
  // app.get('/', 'home.index');
  app.post('/user', 'home.get');
};
