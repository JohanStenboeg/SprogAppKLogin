var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
exports.searchDB = function(brugernavn,password){
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
      return "fejl"
    }
    else{
      return result;
    }
  });
});
};

