let username = document.getElementById("username");
let password = document.getElementById("password");



let count = 5;



function contact(){
    window.open("contact.html" , "_parent");
}


function btn(){
    if(username.value == "student" && password.value == "password"){
        window.open("quizAns.html" , "_parent");
    }else{
        let attemps = count - 1;
        let message = document.querySelector(".wrong").innerHTML = "Wrong username or password! Try again, you have " + attemps + " attempts left";
        count--;
    }
    if (count == 0){
        username.style.display = "none";
        password.style.display = "none";
        let message = document.querySelector(".wrong").innerHTML = "You had 5 attemps you can't sign in";
        let help = document.querySelector(".submit").onclick = contact();
        let help1 = document.querySelector(".submit").innerHTML = "Contact us"
    }
}


let isChromium = window.chrome;

if (isChromium == true){
    alert("Use chrome for the best experience");
}



