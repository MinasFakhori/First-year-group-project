let sections = document.querySelectorAll("section");
let nav = document.querySelectorAll("li");
let lmSection1 = document.getElementById('learning_materials_sec1');
let lmSection2 = document.getElementById('learning_materials_sec2');
let lmSection3 = document.getElementById('learning_materials_sec3');



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
    document.getElementById("iframe").src = "https://mf600.brighton.domains/ci435_assignment/tutorial.html";
});

lmSection3.addEventListener("click", () => {
    document.getElementById("iframe").src = "https://minas.tk/git-and-github";
});






