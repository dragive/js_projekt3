const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Faktura limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
    const id = ob.id
    const daneFaktury = ob.daneFaktury
    const zamowienieId = ob.zamowienieId
    
    try{
        console.log(`query: insert into Faktura (dane_faktury,zamowienie_id) values (${daneFaktury},${zamowienieId});`)
        db.queryNoResult(`insert into Faktura (dane_faktury,zamowienie_id) values (${daneFaktury},${zamowienieId});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Faktura")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Faktura set dane_faktury = ?, zamowienie_id = ? where id = ? `,[ob.daneFaktury, ob.zamowienieId,ob.id])
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