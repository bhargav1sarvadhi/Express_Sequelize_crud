const { ARRAY } = require('sequelize');
const db = require('../config/db');
const DepartmentModel = db.department;
const CustomError = require('../Utils/ApperrorHandler');
const departmentModel = require('../model/departmentModel');



const insertDepartment = async (req, res, next) => {
    const { body } = req;
    if (Array.isArray(body) && body.length > 1) {
        const departmentbulk = await DepartmentModel.bulkCreate(req.body, { returning: true });
        if (departmentbulk) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Department', data: departmentbulk })
        }
    } else {
        const department = await DepartmentModel.create(req.body);
        if (department) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Department', data: department })
        }
    }
}

const deleteDepartment = async (req, res, next) => {
    const { params: { id } } = req;
    const department = await DepartmentModel.destroy({ where: { id } });
    if (department == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Deleted Department', data: department });
    }
}

const updateDepartment = async (req, res, next) => {
    const { params: { id }, body: { name, type } } = req;
    const department = await DepartmentModel.update({ name, type }, { where: { id } })
    if (department == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Updated Department', data: department });
    }
}

module.exports = { insertDepartment, deleteDepartment, updateDepartment }