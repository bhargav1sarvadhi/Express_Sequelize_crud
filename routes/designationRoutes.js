const routes = require('express').Router();
const { designationController } = require('../controller/index');
const asyncWraperFunction = require('../middleware/asycAwaitRemove');

routes.post('/', asyncWraperFunction(designationController.inserDesignation));
routes.delete('/:id', asyncWraperFunction(designationController.deleteDesignation));
routes.put('/:id', asyncWraperFunction(designationController.updateDesignation));

module.exports = routes;