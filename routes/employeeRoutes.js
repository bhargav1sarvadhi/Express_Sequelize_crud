const routes = require('express').Router();
const { employeeConrtoller } = require('../controller/index')
const asyncWraperFunction = require('../middleware/asycAwaitRemove')

routes.post('/', asyncWraperFunction(employeeConrtoller.InsertEmployes));
routes.delete('/:id', asyncWraperFunction(employeeConrtoller.deleteEmployee));
routes.put('/:id', asyncWraperFunction(employeeConrtoller.updateEmployee));


module.exports = routes;