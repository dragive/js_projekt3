const express = require("express")
const app = express()
const port = 3000 || process.env.port

const przedmiotRouter = require('./routes/przedmiot')

app.get('/', (req,res)=>{
    res.json({message:'work!'})
})

app.use('/przedmiot',przedmiotRouter)

app.listen(port, ()=>{
console.log(`example app listening at http://localhost:${port}`);});

