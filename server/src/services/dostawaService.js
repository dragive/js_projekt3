const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Dostawa limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
    const id = ob.id
    const dostawaId = ob.dostawaId
    const pracownikId = ob.pracownikId
    
    try{
        console.log(`query: insert into Dostawa (dostawa_id,pracownik_id) values (${dostawaId},${pracownikId});`)
        db.queryNoResult(`insert into Dostawa (dostawa_id,pracownik_id) values (${dostawaId},${pracownikId});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Dostawa")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Dostawa set pracownik_id = ?, dostawa_id = ? where id = ? `,[ob.pracownikId, ob.dostawaId,ob.id])
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