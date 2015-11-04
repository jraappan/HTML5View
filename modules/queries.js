var db = require('./database');
// this function gets all documents from person collection
exports.getAllPersons = function(req,res){
    
    db.Person.find(function(err,data){
        
        if(err){
            console.log(err.message);
            res.send("Error in database");
        }
        else{
            res.send(data);
        }
    });
}

exports.saveNewPerson = function(req,res){
    
    var personTemp = new db.Person(req.body);
    personTemp.save(function(err,ok){
        res.send("Dabase action done");
    });
}

exports.deletePerson = function(req,res){
    var id = req.params.id.split("=")[1];
    console.log(id);
    db.Person.remove({_id:id},function(err){
        if(err){
            res.send(err.message);
        }
        else{
            res.send("Delete ok");
        }
    });
}

exports.updatePerson = function(req,res){
    
    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age
    }
    db.Person.update({_id:req.body.id},updateData,function(err){
        res.send({data:"ok"}); // hox! return dataType json
    });
}