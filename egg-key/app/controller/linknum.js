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
    // ctx.set(result.headers);
    ctx.body = result;
    console.log(result);

  }
  async dolinkcheck() {
    const { stdout, stderr } = await exec('pstree -p `ps -e | grep server | awk \’{print $1}\’` | wc -l');
    return stdout;
  }
}
module.exports = NumController;
