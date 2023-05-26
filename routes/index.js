const express = require('express');
const router = express.Router();


const employeeController = require('../controllers/employee.controller');


router.post('/add', employeeController.add);

router.put('/update/:id', employeeController.update);

router.delete('/delete/:id', employeeController.delete);

router.get('/all', employeeController.allRecord);
router.get('/singlerecord/:id', employeeController.singleRecord);
module.exports = router;

