const db = require('../config/db');
const CustomError = require('../Utils/ApperrorHandler');
const emplyoeeModel = db.employees

const InsertEmployes = async (req, res, next) => {
    const { body } = req;
    if (Array.isArray(body) && body.length > 1) {
        const employee = await emplyoeeModel.bulkCreate(req.body, { returning: true });
        if (employee) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Employee', data: employee })
        }
    } else {
        const employee = await emplyoeeModel.create(req.body);
        if (employee) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Employee', data: employee })
        }
    }
}

const deleteEmployee = async (req, res, next) => {
    const { params: { id } } = req;
    const employee = await emplyoeeModel.destroy({ where: { id } })
    if (employee == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404))
    } else {
        return res.status(200).json({ success: true, message: 'successfully Deleted Employee', data: employee })
    }
}

const updateEmployee = async (req, res, next) => {
    const { params: { id }, body: { first_name, last_name, email, phone_number } } = req;
    const employee = await emplyoeeModel.update({ first_name, last_name, email, phone_number }, { where: { id } })
    if (employee == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404))
    } else {
        return res.status(200).json({ success: true, message: 'successfully Updated Employee', data: employee })
    }
}

module.exports = { InsertEmployes, deleteEmployee, updateEmployee }