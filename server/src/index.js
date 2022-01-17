const express = require("express")
const app = express()
const port = 3000 || process.env.port

app.get('/', (req,res)=>{
    res.json({message:'work!'})
})

app.listen(port, ()=>{
console.log(`example app listening at http://localhost:${port}`);});

