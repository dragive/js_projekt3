const express = require('express');
const router = express.Router();
const tableSpecifiedService = require('../services/produktService');
const baseService = require("../services/baseService")

router.get('/', function(req,res,next){
    res.json({message:"healthy"})
})

router.get('/getAll', baseService.getAllTemplate(tableSpecifiedService));

router.post('/add',baseService.addTemplate(tableSpecifiedService))

router.post('/delete',baseService.delTemplate(tableSpecifiedService))

router.post("/update", baseService.updateTemplate(tableSpecifiedService))


module.exports = router