const Role = require('../models/role.model')


const roleController = {};

roleController.getRoles = async function(req, res){
 const roles = await Role.find();
res.json(roles);
}

roleController.createRole = async function(req, res){
   const role = new Role({
       role: req.body.role,
    })
   await role.save();
    res.json({
        status: 'Role saved'
    })
}

roleController.getRole = async function(req, res){
  const role = await Role.findById(req.params.id)
    res.json(role)
}

roleController.updateRole = async function(req, res){
    const role = {
        name: req.body.role,
      
    }
    await Role.findByIdAndUpdate(req.params.id, {$set: role}, {new: true})
    res.json({
        status: 'Role updated'
    })
}

roleController.deleteRole = async function(req, res){
    await Role.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Role deleted'
    })
}

module.exports = roleController;