let sections = document.querySelectorAll("section");
let nav = document.querySelectorAll("li");

window.addEventListener("scroll", ()=>{
    let page;

    sections.forEach( section => {
        let top = section.offsetTop -100;
        if(pageYOffset > top){
            current = section.getAttribute("id")
        }  
    })

    nav.forEach(li =>{
        li.classList.remove("page");
        if(li.classList.contains(current)){
            li.classList.add("page")
        }
    })
})