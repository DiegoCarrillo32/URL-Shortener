const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model')
// Gets all registered users
router.get('/', (req,res) => {
    res.send("Users is live")
})
router.get('/users', async (req,res)=>{
    
    const users =  await userModel.find()
    res.send(users);
})
// Gets specific user
router.get('/signin/:username/:password', async ( req, res )=>{
    const username = req.params.username;
    const password = req.params.password;
    const user = await userModel
    .where("username").equals(username)
    .findOne({username:username, password:password})
    if(user === null){
        res.send(false)
    }else{
        res.send(true)
    }
    

 
})

router.post('/register', async(req,res)=>{
    const user = new userModel(req.body);
    await user.save();
    res.send(user)
})


module.exports = router;