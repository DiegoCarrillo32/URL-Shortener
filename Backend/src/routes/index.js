const express = require('express'); 
const urlModel = require('../models/url.model');//model for the url data
const shortid = require('shortid'); //used to generate unique and short ids for the urls
const validUrl = require('valid-url');//checks if the url recieved is valid or not using the URI Standard (RFC 3986)
const router = express.Router();

// Checks if server is live
router.get('/', ( req , res )=>{
    
    res.send('Url shortener server is live!');
} );

// Returns all urls
router.get('/all', async(req,res)=>{
    const urls = await urlModel.find()
    res.send(urls)
})

// Returns all shortened urls
router.get('/urls', async ( req, res )=>{
    
    const urls = await urlModel.find();
    urls.sort( (a,b) => {
      return b.visits - a.visits
    } ).splice(20)
    res.send(urls);
} );

// Gets long url links to be redirected to
router.get('/:short', async (  req, res )=>{
    const shortId = req.params.short;
    const url = await urlModel.findOne({short: shortId})
    if(url){
        return res.send(url.url);
        
    }else {
        return res.status(400)
    }
    
})


// Posts a shortened url
router.post('/add', async ( req , res )=>{
    if(validUrl.isUri(req.body.url)){
        req.body.short = shortid.generate()
        console.log(req.body);
        const url = new urlModel(req.body);
        await url.save();
        res.send(url);        
    }else{
        res.send("Not Valid Url")
    }
    
    

} );


// Deletes a specific url
router.delete('/:id', async( req, res )=>{
    const deleteUrl = req.params.id;
    await urlModel.deleteOne({_id : deleteUrl});
    
    res.send("Deleted");
})
// Edits a specific url
router.put('/:id', async ( req, res )=>{
    const id = req.params.id;
    const body = req.body
    await urlModel.findOneAndUpdate({short:id}, body)
    res.send("Ok")
})






module.exports = router;