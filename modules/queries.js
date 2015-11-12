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
        res.redirect('/');
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
// search person by nane or by begin letters of name
exports.searchPerson = function(req,res){
    var name = req.params.nimi.split("=")[1];
    console.log("name:" + name);
    db.Person.find({name:{'$regex':'^' + name,'$options':'i'}},function(err,data){
        
        if(err){
            console.log(err.message);
            res.send("Error in database search");
        }
        else{
            res.send(data);
        }
    });
}

exports.registerFriend = function(req,res){
    var friend = new db.Friends(req.body);
    friend.save(function(err){
        if(err){
            res.send({status:"register failed - username already in use"});
        }
        else{
            res.send({status:"Register ok"});
        }
    });
}

exports.loginFriend = function(req,res){
    var searchObject = {
        username:req.body.username,
        password:req.body.password
    }
    db.Friends.find(searchObject,function(err,data){
        if(err){
            res.send({status:err.message});
        }else{
            if(data.length > 0){
                res.send({status:"Ok"});
            }else{
                res.send({status:"Wrong username or password"});
            }
        }
    });
}
exports.getFriendsByUsername = function(req,res){
    var usern = req.params.username.split("=")[1];
    db.Friends.find({username:usern}).
    populate('friends').exec(function(err,data){
        console.log(err);
        console.log(data);
        res.send(data.friends);
    });
}