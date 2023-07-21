console.log("hello");


function call_api_fetch(){
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(reponse => reponse.json())
  .then(json => {

        for (let i = 0 ; i<3;i++){
 
            const newArticle = document.createElement("article");

            let newTitle =create_tag("h1", json[i].title);
            let NewParagraphe = create_tag("p", json[i].body);

            newArticle.appendChild(newTitle);
            newArticle.appendChild(NewParagraphe);

            section_container.appendChild(newArticle);
        }
        
      })
      .catch(error => alert("Erreur :" + error))
}

function create_tag(baliseHtml,content){
  let tag = document.createElement(baliseHtml);
  tag.innerText = content;
  return tag;
}

const section_container= document.querySelector(".section_container");

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    call_api_fetch();

} )

call_api_fetch();