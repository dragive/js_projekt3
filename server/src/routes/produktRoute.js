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

router.get('/delete',function(req,res,next){
    var id = req.body.id
    
    id = parseInt(id)
    
    if(id == undefined || id !== id){
        console.log("Unable to delete! Wrong request!")        
        
        res.json({status:"Error", description: "Provided not a number"})
    }
    else{
        console.log("deleting id:", id)
        try{

            if(produktService.del(id)){
                res.json({status:"Done"})
            }
            
        }catch(err){
            res.json({status:`SQL Error: ${err}`})
        }
        
    }
})

module.exports = router