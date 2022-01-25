const express = require('express');
const router = express.Router();
const dostawaService = require('../services/dostawaService');
const baseService = require("../services/baseService")

router.get('/', function(req,res,next){
    res.json({message:"healthy"})
})

router.get('/getAll', baseService.getAllTemplate(dostawaService));

router.post('/add',baseService.addTemplate(dostawaService))

// todo generyzacja tego by był podawany tylko service jako parametr 
router.get('/delete',baseService.delTemplate(dostawaService))
// console.log(delTemplate(NaN))


router.get("/update", baseService.updateTemplate(dostawaService))


module.exports = router