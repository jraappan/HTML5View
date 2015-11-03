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