function onClickLogIn(){
    var eMail;
    var pass; 
    var typedInMail = document.getElementById("typedInEmail");
    var typedInPass = document.getElementById("typedInPass");

    
    if(eMail == typedInMail && pass == typedInPass){
        alert("Du er nu logget ind");
        window.location.href = "menuside.html";
        


    } else{
        alert("Ingen bruger med dine oplysninger \n Kontroller du har skevet rigtigt ");
        
    }

}