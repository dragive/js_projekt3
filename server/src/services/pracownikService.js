const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Pracownik limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
       
    try{
        console.log(`query: insert into Pracownik (imie,nazwisko,login,haslo,stanowisko_id) values ('${ob.imie}','${ob.nazwisko}','${ob.login}','${ob.haslo}','${ob.stanowiskoId}');`)
        db.queryNoResult(`insert into Pracownik (imie,nazwisko,login,haslo,stanowisko_id) values ('${ob.imie}','${ob.nazwisko}','${ob.login}','${ob.haslo}','${ob.stanowiskoId}');`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Pracownik")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Pracownik set imie=?,nazwisko=?,login=?,haslo=?,stanowisko_id=? where id = ? `,[ob.imie, ob.nazwisko,ob.login,ob.haslo,ob.stanowiskoId,ob.id])
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