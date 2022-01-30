const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    if(perPage !== perPage || perPage ==undefined){
        perPage = config.listPerPage
    }
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Klient limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
       
    try{
        console.log(`query: insert into Klient (nazwa_firmy,nip,email,telefon,adres) values ('${ob.nazwaFirmy}',${ob.nip},'${ob.email}','${ob.telefon}','${ob.adres}');`)
        db.queryNoResult(`insert into Klient (nazwa_firmy,nip,email,telefon,adres) values ('${ob.nazwaFirmy}',${ob.nip},'${ob.email}','${ob.telefon}','${ob.adres}');`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Klient")
}

function update(ob){
    console.log("!11")
    console.log(ob)
    try{
        checkObject(ob)
        db.queryNoResult(`update Klient set nazwa_firmy=?,nip=?,email=?,telefon=?,adres=? where id = ? `,[ob.nazwa_firmy, ob.nip,ob.email,ob.telefon,ob.adres,ob.id])
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