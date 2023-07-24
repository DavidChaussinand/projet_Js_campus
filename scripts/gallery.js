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
