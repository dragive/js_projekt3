const express = require("express")
const app = express()
const port = 3001 || process.env.port
const bodyParser = require('body-parser');

const cors = require("cors")

const przedmiotRouter = require('./routes/produktRoute')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const produktRouter = require('./routes/produktRoute')
const dostawaRouter = require('./routes/dostawaRoute')
const fakturaRouter = require('./routes/fakturaRoute')
const klientRouter = require('./routes/klientRoute')
const pracownikRouter = require('./routes/pracownikRoute')
const produktDostawaRouter = require('./routes/produktDostawaRoute')
const zamowienieRouter = require('./routes/zamowienieRoute')
const zamowienieProduktRouter = require('./routes/zamowienieProduktRoute')


app.use('/produkt',produktRouter)
app.use('/dostawa',dostawaRouter)
app.use('/faktura',fakturaRouter)
app.use('/klient',klientRouter)
app.use('/pracownik',pracownikRouter)
app.use('/produktDostawa',produktDostawaRouter)
app.use('/zamowienie',zamowienieRouter)
app.use('/zamowienieProdukt',zamowienieProduktRouter)


app.get('/', (req,res)=>{
    res.json({message:'work!'})
})


app.listen(port,"0.0.0.0", ()=>{
console.log(`example app listening at http://localhost:${port}`);});

