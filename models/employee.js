const mongoose = require("mongoose");
const { APP_URL } = require("../config");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    emp_name: { type: String, required: true },
    department: { type: String, required: true, },
    salary: { type: String, required: true },



}, { timestamps: true });

module.exports = mongoose.model('EmpRecord', registerSchema, 'Employee_Record')