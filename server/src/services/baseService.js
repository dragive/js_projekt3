const db  = require('./db')

function delRouteTemplate(id, table){
    var parsedId = parseInt(id)
    table = "" + table
    try{
        if(parsedId != undefined && parsedId === parsedId){
            parsedId = parseInt(parsedId)
            db.queryNoResult("delete from "+table+" where id = ?",[parsedId])
        }else{
            throw "db.service: Not a number!"
        }
        return true
    }
    catch(err){
        console.error("Deleteing error: ",err)
        console.error("Error with query: ",`delete from ${table} where id = ${parsedId}`)
        throw err
    }
}


function delTemplate(service){
    return function(req,res,next){
        var id = req.body.id
        
        id = parseInt(id)
        
        if(id == undefined || id !== id){
            console.log("Unable to delete! Wrong request!")        
            
            res.json({status:"Error", description: "Provided not a number"})
        }
        else{
            console.log("deleting id:", id)
            try{

                if(service.del(id)){
                    res.json({status:"Done"})
                }
                
            }catch(err){
                res.json({status:`SQL Error: ${err}`})
            }
            
        }
        
    }
}

function addTemplate(service){
    return function(req,res,next){
        console.log(req.body)
        try{
            service.insert(req.body)
            res.json({status:'done'})
        }
        catch(err){
            res.json({status:'failed'})
            console.error("Błąd w routingu, w insercie: ",err)
            }
    }
}


function getAllTemplate(service){
    return function(req,res,next){
        try{
            res.json(service.getMultiple(req.query.page,req.query.itemsPerPage));
        }
        catch(err){
            console.error(err.message)
            next(err)
        }
    }
}


function updateTemplate(service){
    return function(req,res,next){
        ob = req.body
        try{
            service.update(ob)

            res.json({status:"Done"})
        }
        catch(err){
            res.json({status:"Error", description:err})
        }
    }
}

module.exports = {
    del: delRouteTemplate,
    delTemplate,
    addTemplate,
    getAllTemplate,
    updateTemplate
}