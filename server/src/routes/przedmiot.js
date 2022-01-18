const express = require('express');
const router = express.Router();
// const quotes = require('../services/quotes');

router.get('/', function(req,res,next){
    res.json({message:"123!"})
})

module.exports = router