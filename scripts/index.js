window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

function call_api_fetch() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((reponse) => reponse.json())
    .then((json) => {
      for (let i = 0; i < 4; i++) {
        createArticles(json[i].title, json[i].body);
      }
    })
    .catch((error) => alert("Erreur :" + error));
}



function createArticles(title, content) {
  const newArticle = document.createElement("article");
  const newTitle = document.createElement("h1");
  const newContent = document.createElement("p");
  newTitle.textContent = title;
  newContent.textContent = content;
  newArticle.appendChild(newTitle);
  newArticle.appendChild(newContent);
  section_container.appendChild(newArticle);
}

call_api_fetch();

const section_container = document.querySelector(".section_container");

/*********************************  ajout d'un article *********************************************************************/
const forms = document.getElementById("article-form");

forms.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  createArticles(title, content);
  document.getElementById("title").value = "";
  document.getElementById("content").value = "indiquez votre contenu";
});

/****************** Supprimer un article ***************************/
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const article = document.querySelector("article");
  article.removeChild(article.children[0]);
});
