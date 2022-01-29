const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    if(perPage !== perPage || perPage ==undefined){
        perPage = config.listPerPage
    }
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Produkt limit ?, ?;`,[offset,perPage]);
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

function del(id){
    return base.del(id,"Produkt")
}

function update(ob){
    try{
        console.log("json")
        console.log(ob)
        checkObject(ob)
        db.queryNoResult(`update Produkt set nazwa = ?, ilosc = ?, cena = ? where id = ? `,[ob.nazwa, ob.ilosc,ob.cena,ob.id])
    }catch(err){
        console.log("Service Update Err: ",err)
    }
}

function checkObject(ob){
    //todo
}

module.exports = {
    getMultiple,
    insert,
    del,
    update
}