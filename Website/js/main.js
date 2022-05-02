let sections = document.querySelectorAll("section");
let nav = document.querySelectorAll("li");
let lmSection1 = document.getElementById('learning_materials_sec1');
let lmSection2 = document.getElementById('learning_materials_sec2');
let lmSection3 = document.getElementById('learning_materials_sec3');
let screenWidth = window.innerWidth;



window.addEventListener("scroll", ()=>{
    let page;

    sections.forEach( section => {
        let top = section.offsetTop -150;
        if(scrollY > top){
            current = section.getAttribute("id");
        }  
    })

    nav.forEach(li =>{
        li.classList.remove("page");
        if(li.classList.contains(current)){
            li.classList.add("page");
        }
    })

   
})


 
lmSection1.addEventListener("click", () => {
    document.getElementById("iframe").src = "https://mf600.brighton.domains/ci435_assignment/";
    
});

lmSection2.addEventListener("click", () => {
    document.getElementById("iframe").src = "Privacy issues in Business Information Systems.html";
});

lmSection3.addEventListener("click", () => {
    document.getElementById("iframe").src = "https://minas.tk/git-and-github";
});


lmSection1.addEventListener('dblclick', () => {
    window.open("https://google.com");
    });

lmSection2.addEventListener('dblclick', () => {
    window.open("Privacy issues in Business Information Systems.html");
    });
    
lmSection3.addEventListener('dblclick', () => {
    window.open("https://google.com");
});    



if (screenWidth < 900){
    lmSection1.addEventListener("click", () => {
        window.open("https://google.com");
    });
    
    lmSection2.addEventListener("click", () => {
        window.open("Privacy issues in Business Information Systems.html");
    });
    
    lmSection3.addEventListener("click", () => {
        window.open("https://google.com");
    });
}


let isChromium = window.chrome;

if (isChromium == true){
    alert("Use chrome for the best experience");
}
