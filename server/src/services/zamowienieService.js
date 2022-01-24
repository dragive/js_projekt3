const db = require('./db')
const config = require('../config')
const base = require('./baseService')

function getMultiple(page=1,perPage = config.listPerPage){
    const offset = (page - 1) * perPage;
    const data = db.query(`Select * from Zamowienie limit ?, ?;`,[offset,perPage]);
    const meta = {page}

    return {
        data,
        meta
    }
}

function insert(ob){
       
    try{
        console.log(`query: insert into Zamowienie (data_zalozenia,pracownik_id,klient_id,data_realizacji,stan) values ('${ob.dataZalozenia}',${ob.pracownikId},${ob.klienId},'${ob.dataRealizacji}',${ob.stan});`)
        db.queryNoResult(`insert into Zamowienie (data_zalozenia,pracownik_id,klient_id,data_realizacji,stan) values ('${ob.dataZalozenia}',${ob.pracownikId},${ob.klienId},'${ob.dataRealizacji}',${ob.stan});`)
    }
    catch(err){
        console.error("Błąd przy insercie",err)
        throw err
    }
}

function del(id){
    return base.del(id,"Zamowienie")
}

function update(ob){
    try{
        checkObject(ob)
        db.queryNoResult(`update Zamowienie set data_zalozenia=?,pracownik_id=?,klient_id=?,data_realizacji=?,stan=? where id = ? `,[ob.dataZalozenia, ob.pracownikId,ob.klienId,ob.dataRealizacji,ob.stan,ob.id])
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