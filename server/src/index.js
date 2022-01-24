const express = require("express")
const app = express()
const port = 3000 || process.env.port
const bodyParser = require('body-parser');


app.get('/', (req,res)=>{
    res.json({message:'work!'})
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const przedmiotRouter = require('./routes/produktRoute')
const dostawaRouter = require('./routes/dostawaRoute')


app.use('/produkt',przedmiotRouter)
app.use('/dostawa',dostawaRouter)


app.listen(port, ()=>{
console.log(`example app listening at http://localhost:${port}`);});

