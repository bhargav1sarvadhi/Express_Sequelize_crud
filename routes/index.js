const routes = require('express').Router();
const CustomError = require('../Utils/ApperrorHandler')
const invalidRoute = (req, res, next) => {
    return next(new CustomError(`${req.url} - Bad request`, 400));
};

routes.use('/employee', require('./employeeRoutes'));
routes.use('/department', require('./departmentRoutes'));
routes.use('/designation', require('./designationRoutes'));
routes.all('*', invalidRoute);


module.exports = routes;