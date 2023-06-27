const CustomError = require('../Utils/ApperrorHandler');

const errorHandler = (error, req, res, next) => {
    const status_code = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(status_code).json({ status_code: status_code, success: false, message: message });
};

module.exports = errorHandler;