const express = require('express');
const router = express.Router();
const przedmioty = require('../services/przedmioty');

router.get('/', function(req,res,next){
    try{
        res.json(przedmioty.getMultiple(req.query.page));
    }
    catch(err){
        console.error(err.message)
        next(err)
    }
});

module.exports = router