'use strict';

const Service = require('egg').Service;

class ServiceRegisterService extends Service {
  async InsertDatabase() {
    console.log('=================');
    const username = this.ctx.query.username;
    console.log(this.ctx.query.username);
    const password = this.ctx.query.password;
    const result = await this.app.mysql.insert('register', { username, password });
    if (result.affectedRows === 1) {
      console.log(username + '......' + password);
      this.ctx.body = 'success';
    } else {
      console.log(username + '......' + password);
      this.ctx.body = 'fail';
    }

  }
}

module.exports = ServiceRegisterService;
