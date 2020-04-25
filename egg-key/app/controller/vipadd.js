'use strict';

const Controller = require('egg').Controller;

class vipadd extends Controller {
  async controllerRegister() {
    await this.ctx.render('register');
    // await this.service.serviceRegister.InsertDatabase();
  }
  async test() {
    await this.service.servicevipadd.UpdateDatabase();
    // await this.controller.controllerLogin.jumpLogin();
    // await this.ctx.render('login');
  }
}

module.exports = vipadd;
