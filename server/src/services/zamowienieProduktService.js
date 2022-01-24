const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Zamowienie_produkt limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
       
    try{
        console.log(`query: insert into Zamowienie_produkt (produkt_id,ilosc,zamowienie_id) values (${ob.produktId},${ob.ilosc},${ob.zamowienieId});`)
        db.queryNoResult(`insert into Zamowienie_produkt (produkt_id,ilosc,zamowienie_id) values (${ob.produktId},${ob.ilosc},${ob.zamowienieId});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Zamowienie_produkt")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Zamowienie_produkt set produkt_id=?,ilosc=?,zamowienie_id=? where id = ? `,[ob.produktId, ob.ilosc,ob.zamowienieId,ob.id])
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