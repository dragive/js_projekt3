const express = require('express');
const router = express.Router();
const produktService = require('../services/produktService');


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

router.post('/add',function(req,res,next){
    console.log(req.body)
    try{
        produktService.insert(req.body)
        res.json({status:'done'})
    }
    catch(err){
        res.json({status:'failed'})
        console.error("Błąd w routingu, w insercie: ",err)
        }
})

module.exports = router