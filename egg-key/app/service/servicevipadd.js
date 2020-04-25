'use strict';

const Service = require('egg').Service;

class ServicevipaddService extends Service {
  async UpdateDatabase() {

    const a = this.ctx.query.username;
    const c = this.ctx.query.capacity;
    const d = this.ctx.query.duration;
    console.log(a, d, c);
    // 修改数据，将会根据主键 ID 查找，并更新
    const row = {
      username: a,
      capacity: c,
      duration: d,
      modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };
    const options = {
      where: {
        username: a,
      },
    };
    const result = await this.app.mysql.update('register', row, options); // 更新 posts 表中的记录
    // 判断更新成功
    if (result.affectedRows === 1) {
      this.ctx.body = 'success';
    } else {
      this.ctx.body = 'fail';
    }
  }
}

module.exports = ServicevipaddService;
