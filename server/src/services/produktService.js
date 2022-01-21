const db = require('./db')
const config = require('../config')

function getMultiple(page=1){
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`Select * from Produkt`,[]); //fixme dodanie limitów do pages
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
    const id = ob.id
    const nazwa = ob.nazwa
    const ilosc = ob.ilosc
    const cena = ob.cena
    
    try{
        console.log(`query: insert into Produkt (nazwa,ilosc,cena) values ('${nazwa}',${ilosc},${cena});`)
        db.queryNoResult(`insert into Produkt (nazwa, ilosc, cena) values ('${nazwa}',${ilosc},${cena});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}


module.exports = {
    getMultiple,
    insert
}