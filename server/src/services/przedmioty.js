const db = require('./db')
const config = require('../config')

function getMultiple(page=1){
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`Select * from Produkt`,[]);
    const meta = {page}

    return {
        data,
        meta
    }
}


module.exports = {
    getMultiple
}