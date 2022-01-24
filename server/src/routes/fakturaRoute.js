const express = require('express');
const router = express.Router();
const tableSpecifiedService = require('../services/fakturaService');
const baseService = require("../services/baseService")

router.get('/', function(req,res,next){
    res.json({message:"healthy"})
})

router.get('/getAll', baseService.getAllTemplate(tableSpecifiedService));

router.post('/add',baseService.addTemplate(tableSpecifiedService))

// todo generyzacja tego by był podawany tylko service jako parametr 
router.get('/delete',baseService.delTemplate(tableSpecifiedService))
// console.log(delTemplate(NaN))


router.get("/update", baseService.updateTemplate(tableSpecifiedService))


module.exports = router