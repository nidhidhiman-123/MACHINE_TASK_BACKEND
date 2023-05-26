const bcrypt = require("bcrypt");
const employeeModel = require("../models/employee");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MYSECRETKEY";



exports.add = async (req, res) => {
  try {
    const { emp_name, department, salary } = req.body;


    const adduser = new employeeModel({
      emp_name,
      department,
      salary
    });
    const savedUser = await adduser.save();


    res.status(201).json({ data: savedUser });
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

};

exports.update = async (req, res) => {
  try {
    const { emp_name, department, salary } = req.body;

    const updateUser = await employeeModel.findByIdAndUpdate({ _id: req.params.id }, {
      emp_name: emp_name, department: department, salary: salary
    },)


    res.status(201).json({ data: updateUser });
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

};

exports.delete = async (req, res) => {
  try {


    const deleteUser = await employeeModel.findByIdAndDelete({ _id: req.params.id }

    )


    res.status(201).json({ data: deleteUser });
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

};


exports.allRecord = async (req, res) => {
  try {
    const { sortBy } = req.query;

    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = 1;
    } else {
      sortOptions = { emp_name: 1 };
    }

    const all = await employeeModel.find().sort(sortOptions);
    res.status(201).json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




exports.singleRecord = async (req, res) => {
  try {


    const Single = await employeeModel.findById({ _id: req.params.id });
    res.status(201).json(Single);
  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }

};

