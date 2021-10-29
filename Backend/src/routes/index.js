const express = require('express');
const router = express.Router();
const urlModel = require('../models/url.model');


// Checks if server is live
router.get('/', ( req , res )=>{
    res.send('Url shortener server is live!');
} );

// Returns all shortened urls
router.get('/urls', async ( req, res )=>{
    const urls = await urlModel.find();
    console.log(urls);
    res.send(urls);
} );

router.post('/short', async ( req , res )=>{
    const url = new urlModel(req.body);
    await url.save();
    
    
    res.send("Recieved");
} );

router.delete('/deleteurl', async( req, res )=>{
    const deleteUrl = req.body._id;
    console.log(deleteUrl);
    await urlModel.deleteOne({_id : deleteUrl});
    res.send("Deleted")
})

module.exports = router;