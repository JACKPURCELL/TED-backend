'use strict';

const Controller = require('egg').Controller;

class vipask extends Controller {
  async jumpLogin() {
    console.log('---------------------------------------');
    await this.ctx.render('login');
  }
  async judgeLogin() {
    const username = this.ctx.query.username;
    const sel = await this.app.mysql.get('register', { username });
    console.log(sel);


    if (sel) {
      this.ctx.body = {
        capacity: sel.capacity,
        duration: sel.duration,
        modifiedAt: sel.modifiedAt,
      };
      console.log(this.ctx.body);
    } if (sel == null) {
      this.ctx.body = 'fail';
      console.log(this.ctx.body);
    }
  }
}

module.exports = vipask;
