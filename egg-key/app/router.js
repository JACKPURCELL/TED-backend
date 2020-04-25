'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/form', controller.form.post);
  router.get('/linknum', controller.linknum.get);
  router.get('/', controller.controllerRegister.controllerRegister);
  router.get('/commit', controller.controllerRegister.test);
  router.get('/login', controller.controllerLogin.judgeLogin);
  router.get('/vipadd', controller.vipadd.test);
  router.get('/vipask', controller.vipask.judgeLogin);
};
