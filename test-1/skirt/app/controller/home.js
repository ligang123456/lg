'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * create() {
      this.ctx.body = yield this.ctx.service.user.create();
    }
    * delete() {
      this.ctx.body = yield this.ctx.service.user.delete();
    }
    * get() {
      this.ctx.body = yield this.ctx.service.user.get();
    }
    * select() {
      this.ctx.body = yield this.ctx.service.user.select();
    }
  }
  return HomeController;
};
