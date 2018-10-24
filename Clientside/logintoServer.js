

function testLogin(){
    console.log("prøver at logge ind! ")

    var brugernavninput = document.getElementById("brugernavn");
    var passwordinput = document.getElementById("password")
    //console.log(brugernavninput.value +" - "+passwordinput.value);
    //document.getElementById("skrivher").innerHTML = "knap klikket"; 
    var params = 'brugernavn='+brugernavninput.value+'&password='+passwordinput.value+'';
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function() {
        console.log("inde")
        console.log(this.readyState+"   "+this.status)
        if (this.readyState == 4 && this.status == 200) {
            if(this.response=="fejl") {
                alert("wrong info, you have lost your asian")
            }else{
                window.location.href= "http://127.0.0.1:5500/menuside.html"
                document.cookie="loginId="+this.response+""
                //alert(document.cookie)
            }
             
          document.getElementById("skrivher").innerHTML = this.response;
        }
    };

    var url = "http://172.20.10.2:3000/login";
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
}