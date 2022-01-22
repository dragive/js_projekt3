const express = require('express');
const router = express.Router();
const produktService = require('../services/produktService');
const baseService = require("../services/baseService")

router.get('/', function(req,res,next){
    res.json({message:"healthy"})
})

router.get('/getAll', function(req,res,next){
    try{
        res.json(produktService.getMultiple(req.query.page));
    }
    catch(err){
        console.error(err.message)
        next(err)
    }
});

router.post('/add',baseService.addTemplate(produktService))

// todo generyzacja tego by był podawany tylko service jako parametr 
router.get('/delete',baseService.delTemplate(produktService))
// console.log(delTemplate(NaN))


router.get("/update", function(req,res,next){
    ob = req.body
    try{
        produktService.update(ob)

        res.json({status:"Done"})
    }
    catch(err){
        res.json({status:"Error", description:err})
    }
})

module.exports = router