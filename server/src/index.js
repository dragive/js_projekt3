const express = require("express")
const app = express()
const port = 3001 || process.env.port
const bodyParser = require('body-parser');

const cors = require("cors")

const przedmiotRouter = require('./routes/produktRoute')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/produkt',przedmiotRouter)


app.get('/', (req,res)=>{
    res.json({message:'work!'})
})


app.listen(port,"0.0.0.0", ()=>{
console.log(`example app listening at http://localhost:${port}`);});

