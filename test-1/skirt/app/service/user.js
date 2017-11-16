/**
 * 2017-09-28
 */

'use strict';
module.exports = app => {
  class users extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('user', a);
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return true;
    }
    // * update(a) {
    //   try {
    //     yield app.mysql.update('user', a);
    //   } catch (y) {
    //     this.ctx.logger.err(y);
    //     return false;
    //   }
    //   return true;
    // }
    * get() {
      let s;
      try {
        s = yield app.mysql.select('home');
      } catch (y) {
        this.ctx.logger.err(y);
        return false;
      }
      return s;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('home', {
          where: {
            name: [ 'lg', 'a' ],
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return users;
};
