var dbfind = require('./dbfind')
exports.login_as_client = function(req, res){
    var user_name=req.body.brugernavn;
    var password_in=req.body.password;
    //test login system
    console.log("test")
    dbfind.searchDB(user_name,password_in);
    
    //res.send()
}