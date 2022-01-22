const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('../db/main.db'), {fileMustExist: true, verbose: console.log});

function query(sql, params = []) {
  return db.prepare(sql).all(params);
}
function queryNoResult(sql,params = []) {
  return db.prepare(sql).run(params);
}

module.exports = {
  query,
  queryNoResult
}