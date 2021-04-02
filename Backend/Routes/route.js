const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Congraluations you are on 🚀")
})

router.post('/register',(req,res)=>{
    console.log(req.body);
    
    res.json({message : req.body})
})



module.exports = router