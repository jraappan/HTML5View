var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);

function connectionStatus(err,ok){
    if(err){
        console.log(er.message);
    } else{
        console.log("Connected");
    }
}

var Person = mongoose.model('Person',{
    name:String,
    address:String,
    age:{type:Number}
},'person');
// Using exports object you expose the data to other modules
exports.Person = Person;

exports.myFunction = function(){
    console.log("This is exported function");
}