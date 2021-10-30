const express = require('express');
const router = express.Router();
const urlModel = require('../models/url.model');
const shortid = require('shortid');

// Checks if server is live
router.get('/', ( req , res )=>{
    
    res.send('Url shortener server is live!');
} );




// Returns all shortened urls
router.get('/urls', async ( req, res )=>{
    
    const urls = await urlModel.find();
    
    res.send(urls);
} );

// Gets long url links to be redirected to
router.get('/:short', async (  req, res )=>{
    const shortId = req.params.short;
    const url = await urlModel.findOne({short: shortId})
    if(url){
        return res.send(url.url);
        // return res.redirect(url.url);
    }else {
        return res.status(400)
    }
    
})


// Posts a shortened url
router.post('/add', async ( req , res )=>{
    req.body.short = shortid.generate()
    console.log(req.body);
    const url = new urlModel(req.body);
    await url.save();
    
    
    res.send(url);
} );



router.delete('/:id', async( req, res )=>{
    const deleteUrl = req.params.id;
    await urlModel.deleteOne({_id : deleteUrl});
    
    res.send("Deleted");
})

router.put('/:id', async ( req, res )=>{
    const id = req.params.id;
    const body = req.body
    await urlModel.findOneAndUpdate({short:id}, body)
    res.send("Ok")
})






module.exports = router;