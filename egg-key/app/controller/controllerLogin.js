'use strict';

const Controller = require('egg').Controller;

class ControllerLoginController extends Controller {
  async jumpLogin() {
    console.log('---------------------------------------');
    await this.ctx.render('login');
  }
  async judgeLogin() {
    const username = this.ctx.query.username;
    const password = this.ctx.query.password;
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(username + '......' + password);
    const sel = await this.app.mysql.get('register', { username, password });
    console.log(sel);
    this.ctx.body += '';
    if (sel) {
      this.ctx.body = 'success';
    // eslint-disable-next-line eqeqeq
    } if (sel == null) {
      this.ctx.body = 'fail';
    }
  }
}

module.exports = ControllerLoginController;
