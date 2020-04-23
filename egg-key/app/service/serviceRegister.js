'use strict';

const Service = require('egg').Service;

class ServiceRegisterService extends Service {
  async InsertDatabase() {
    console.log('=================');
    const username = this.ctx.query.username;
    console.log(this.ctx.query.username);
    const password = this.ctx.query.password;
    await this.app.mysql.insert('register', { username, password });
    console.log(username + '......' + password);
    this.ctx.body = username + '注册成功';
  }
}

module.exports = ServiceRegisterService;
