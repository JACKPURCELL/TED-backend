// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportControllerLogin = require('../../../app/controller/controllerLogin');
import ExportControllerRegister = require('../../../app/controller/controllerRegister');
import ExportForm = require('../../../app/controller/form');
import ExportHome = require('../../../app/controller/home');
import ExportLinknum = require('../../../app/controller/linknum');
import ExportSignin = require('../../../app/controller/signin');
import ExportSignup = require('../../../app/controller/signup');

declare module 'egg' {
  interface IController {
    controllerLogin: ExportControllerLogin;
    controllerRegister: ExportControllerRegister;
    form: ExportForm;
    home: ExportHome;
    linknum: ExportLinknum;
    signin: ExportSignin;
    signup: ExportSignup;
  }
}
