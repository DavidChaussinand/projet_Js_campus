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


    const forms = document.getElementById("article-form");

    forms.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        createArticles(title, content);
        document.getElementById("title").value="";
        document.getElementById("content").value="indiquez votre contenu";
    })

  