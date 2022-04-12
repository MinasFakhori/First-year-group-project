let dropdown= document.querySelector(".dropdown");
let body= document.querySelector("body");
let fontBtn= document.querySelector(".font");
let colourBtn= document.querySelector(".colour");
let zoomBtn= document.querySelector(".zoom");
let isClicked = false;
let font = false;
let colour = false;
let zoom = false;


function fundropdown() {
    if (isClicked == false){ 
    dropdown.style.display = "block";
    isClicked = true;
    }else if (isClicked == true){
    dropdown.style.display = "none";
    isClicked = false;
    }
}


function changeFont(){
    if (font == false){ 
        body.style.fontFamily = "Arial", "Comic Sans";
        font = true;
        fontBtn.innerHTML = "Normal Font";
        dropdown.style.display = "none";
        isClicked = false;
    }else if(font == true){
        fontBtn.innerHTML = "Dyslexia Font"
        body.style.fontFamily = "Fredoka", "sans-serif";
        font = false;
        dropdown.style.display = "none";
        isClicked = false;
    }
}


function changeColour(){
    if(colour == false){
        body.style.backgroundColor = "#A8F29A";
        colour = true;
        colourBtn.innerHTML = "Normal Colour";
        dropdown.style.display = "none";
        isClicked = false;
    }else{
        body.style.backgroundColor = "#FFFFFF";
        colour = false;
        dropdown.style.display = "none";
        isClicked = false;
    }
}

function changeColour(){
    if(colour == false){
        body.style.backgroundColor = "#A8F29A";
        colour = true;
        colourBtn.innerHTML = "Normal Colour"
        dropdown.style.display = "none";
        isClicked = false;
    }else{
        body.style.backgroundColor = "#FFFFFF";
        colour = false;
        dropdown.style.display = "none";
        isClicked = false;
    }
}


function changeZoom(){
    if( zoom == false){
        body.style.fontSize = "1.5em";
        zoomBtn.innerHTML = "Normal Font";
        zoom = true;
        dropdown.style.display = "none";
        isClicked = false;
    }else{
        body.style.fontSize = "1em";
        zoomBtn.innerHTML = "Font";
        zoom = false;
        dropdown.style.display = "none";
        isClicked = false;
    }
}
  
