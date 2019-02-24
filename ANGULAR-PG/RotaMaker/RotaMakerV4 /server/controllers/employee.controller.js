const Employee = require('../models/employee.model')


const employeeController = {};

employeeController.getEmployees = async function(req, res){
 const employees = await Employee.find();
res.json(employees);
}

employeeController.createEmployee = async function(req, res){
    console.log(req.body, "req.body")
   const employee = new Employee({
       name: req.body.name,
       position: req.body.position,
       hpw: req.body.hpw,
       salary: req.body.salary,
       fullyBooked: req.body.fullyBooked,
       shiftsWorked: [],
       colleagues: [],
       hworked: req.body.hworked,
       aviability: req.body.aviability

       
    })
   await employee.save();
    res.json({
        status: 'Employee saved'
    })

}

employeeController.getEmployee = async function(req, res){
  const employee = await Employee.findById(req.params.id)
    res.json(employee)
}

employeeController.updateEmployee = async function(req, res){
    const employee = {
        name: req.body.name,
        position: req.body.position,
        hpw: req.body.hpw,
        salary: req.body.salary,
        fullyBooked: req.body.fullyBooked,
        shiftsWorked: req.body.shiftsWorked,
        colleagues: req.body.colleagues,
        hworked: req.body.hworked,
        aviability: req.body.aviability

    }
    await Employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true})
    res.json({
        status: 'Employee updated'
    })
}

employeeController.deleteEmployee = async function(req, res){
    await Employee.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Employee deleted'
    })
}

module.exports = employeeController;