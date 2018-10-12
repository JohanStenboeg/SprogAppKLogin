
function onClickLogIn(){
    var eMail = "admin";
    var pass = "admin";
    var typedInMail = document.getElementById("typedInEmail");
    var typedInPass = document.getElementById("typedInPass");
    if(eMail == typedInMail && pass == typedInPass){
        alert("Du er nu logget ind");
        
        
 else{
        alert("Ingen bruger med dine oplysninger");
    }

}
}
