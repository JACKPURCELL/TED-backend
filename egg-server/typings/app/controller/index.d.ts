// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportForm = require('../../../app/controller/form');
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    form: ExportForm;
    home: ExportHome;
  }
}
