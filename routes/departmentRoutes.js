const routes = require('express').Router();
const { departmentController } = require('../controller/index');
const asyncWraperFunction = require('../middleware/asycAwaitRemove');


routes.post('/', asyncWraperFunction(departmentController.insertDepartment));
routes.delete('/:id', asyncWraperFunction(departmentController.deleteDepartment));
routes.put('/:id', asyncWraperFunction(departmentController.updateDepartment));

module.exports = routes;