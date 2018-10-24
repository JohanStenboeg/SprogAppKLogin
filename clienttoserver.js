var dbfind = require('./dbfind')
exports.login_as_client = function(req, res){
    var user_name=req.body.brugernavn;
    var password_in=req.body.password;
    //test login system
    //var x = dbfind.searchDB(user_name,password_in);
    //console.log(x)
    
    
    //res.send(x)
    console.log("bla222")

    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var brugernavn = user_name; 
var password = password_in;

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Tododb");
  dbo.collection("brugere").find({username : brugernavn, password : password},{projection : {username : 0,password : 0}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    console.log(result.length)
    if (result.length == 0){
      console.log("mads er en spasser")
      res.send("fejl");
    }
    else{
      res.send( result);
    }
  });
});


}
    