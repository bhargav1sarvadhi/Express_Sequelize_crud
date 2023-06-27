const db = require('../config/db');
const CustomError = require('../Utils/ApperrorHandler');
const DesignationModel = db.designation;


const inserDesignation = async (req, res, next) => {
    const { body } = req;
    if (Array.isArray(body) && body.length > 1) {
        const designationbulk = await DesignationModel.bulkCreate(req.body, { returning: true });
        if (designationbulk) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Designation', data: designationbulk })
        }
    } else {
        const designation = await DesignationModel.create(req.body);
        if (designation) {
            return res.status(201).json({ success: true, message: 'successfully Inserted Designation', data: designation })
        }
    }
}

const deleteDesignation = async (req, res, next) => {
    const { params: { id } } = req;
    const designation = await DesignationModel.destroy({ where: { id } })
    if (designation == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Deleted Designation', data: designation })

    }
}

const updateDesignation = async (req, res, next) => {
    const { params: { id }, body: { name } } = req;
    const designation = await DesignationModel.update({ name }, { where: { id } })
    if (designation == 0) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Updated Designation', data: designation })
    }
}




module.exports = { inserDesignation, deleteDesignation, updateDesignation }