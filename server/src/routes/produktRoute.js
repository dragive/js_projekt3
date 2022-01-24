const express = require('express');
const router = express.Router();
const produktService = require('../services/produktService');
const baseService = require("../services/baseService")

router.get('/', function(req,res,next){
    res.json({message:"healthy"})
})

router.get('/getAll', baseService.getAllTemplate(produktService));

router.post('/add',baseService.addTemplate(produktService))

// todo generyzacja tego by był podawany tylko service jako parametr 
router.get('/delete',baseService.delTemplate(produktService))
// console.log(delTemplate(NaN))


router.get("/update", baseService.updateTemplate(produktService))


module.exports = router