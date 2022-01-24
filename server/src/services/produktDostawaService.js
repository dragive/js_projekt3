const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Produkt_dostawa limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
       
    try{
        console.log(`query: insert into Produkt_dostawa (dostawa_id,produkt_id,ilosc) values (${ob.dostawaId},${ob.produktId},${ob.ilosc});`)
        db.queryNoResult(`insert into Produkt_dostawa (dostawa_id,produkt_id,ilosc) values (${ob.dostawaId},${ob.produktId},${ob.ilosc});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Produkt_dostawa")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Produkt_dostawa set dostawa_id=?,produkt_id=?,ilosc=? where id = ? `,[ob.dostawaId, ob.produktId,ob.ilosc,ob.id])
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