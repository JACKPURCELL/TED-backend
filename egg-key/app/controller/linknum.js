// app/controller/linknum.js
'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

class NumController extends Controller {
  async get() {
    const ctx = this.ctx;
    const result = await this.dolinkcheck();
    ctx.status = 200;
    // const linknum = Number(result) - 1;
    // ctx.set(result.headers);
    ctx.body = result;
    console.log(result);

  }
  async dolinkcheck() {
    // const { stdout, stderr } = await exec('pstree -p `ps -e | grep keymanager | awk \'{print $1}\'` | wc -l');
    const { stdout, stderr } = await exec('ls');
    return stdout;// stdout-1为连接数
  }
}
module.exports = NumController;
