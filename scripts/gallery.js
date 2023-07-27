const colonne = document.querySelector(".colonne");
const mosaique = document.querySelector(".mosaique");

mosaique.addEventListener("click", () => {
  const section = document.querySelector("section");
  section.classList.remove("gallery_colonne", "width_gallery");
  section.classList.add("gallery_mosaique");
});

colonne.addEventListener("click", () => {
  const section = document.querySelector("section");
  section.classList.remove("gallery_mosaique");
  section.classList.add("gallery_colonne", "width_gallery");
});

/*********** ajouter une image à la galerie *************/

const img = document.getElementById("image");
img.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUrl = document.getElementById("url").value;
  if (newUrl !== "") {
    const add_image = document.querySelector(".add_image");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", newUrl);
    newImg.setAttribute("alt", "");
    newImg.classList.add("delete_img");
    add_image.appendChild(newImg);
    document.getElementById("url").value = "";
    btn_delete.innerText = "Supprimer image";
  }
});

/***** supprimer une image uniquement si rajouter par l'utilisateur ****/
const btn_delete = document.querySelector(".btn_delete");

btn_delete.addEventListener("click", () => {
  const section = document.getElementById("test");
  // Récupérer toutes les images de la section avec la classe "delete_img"
  const delete_img = section.querySelectorAll("img.delete_img");
  
  if (delete_img.length > 0) {
    delete_img[0].remove();
  } else {
    btn_delete.innerText =
      "Aucune image ne peut être supprimée, Merci d'en rajouter";
    btn_delete.style.display = "block";
  }
});

/* message d'erreur pr rajout d'image si cela ne commence pas par http ou https *****/
const validation_url = document.querySelector(".error_msg");
const input_url = document.getElementById("url");

input_url.addEventListener("input", () => {
  const model_url = /^https?/;

  if (model_url.test(input_url.value) || input_url.value.trim === "") {
    validation_url.style.display = "none";
  } else {
    validation_url.style.display = "block";
  }
});

/******** carrousel **************/

function carouselAuto() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    index = index + 1;
    if (index === slides.length) {
      index = 0;
    }
    console.log(index);

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }, 3000);
}

document.addEventListener("DOMContentLoaded", carouselAuto);


