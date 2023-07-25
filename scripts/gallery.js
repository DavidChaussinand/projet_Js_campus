const colonne = document.querySelector(".colonne");
const mosaique = document.querySelector(".mosaique");

mosaique.addEventListener("click",() => {
    const section = document.querySelector('section');
    section.classList.remove("gallery_colonne","width_gallery")
    section.classList.add("gallery_mosaique");
})


colonne.addEventListener("click",() => {
    const section = document.querySelector('section');
    section.classList.remove("gallery_mosaique");
    section.classList.add("gallery_colonne","width_gallery");
})


/*
const newArticle = document.createElement("article");
const newTitle = document.createElement("h1");
newTitle.textContent = json[i].title;
newArticle.appendChild(newTitle);
section_container.appendChild(newArticle);*/

const img =  document.getElementById("image");

img.addEventListener("submit",(event)=> {
    event.preventDefault();
    const add_image = document.querySelector(".add_image");
    const newImg = document.createElement("img");
    const newUrl = document.getElementById("url").value;
    newImg.setAttribute("src", newUrl);
    newImg.setAttribute("alt", "");
    newImg.classList.add( "delete_img");
    add_image.appendChild(newImg);
    document.getElementById("url").value="";
})

const btn_delete = document.querySelector(".btn_delete");

const img2 = document.getElementById("test");
console.log(img2);

console.log(img2.children);
    

btn_delete.addEventListener("click", () =>{
    const section_img = document.querySelector("section img"); 
    section_img.remove(section_img);
    
})






