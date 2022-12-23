/*
* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali, inventatele*
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/
let posts = document.getElementById("posts")
let attualDate = () => {
    let data = new Date();
    let gg, mm, aaaa, officialDate;
    gg = data.getDate() + "/";
    mm = data.getMonth() + 1 + "/";
    aaaa = data.getFullYear();
    return officialDate = mm + gg + aaaa
};
let officialsDate = attualDate()
let randomId = 1;
const card = [
    {
        id: 1, nomeAutore: "Phil Mangione",
        fotoAutore: "https://placeimg.com/630/480/any",
        date: officialsDate,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sintvoluptate recusandae architecto. Et nihil ullam aut alias.",
        immaginePost: "https://placeimg.com/670/480/any",
        numeroLike: "83"
    },
    {
        id: 2,
        nomeAutore: "Sofia Perlari",
        fotoAutore: "https://placeimg.com/640/480/any",
        date: officialsDate,
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exer",
        immaginePost: "https://placeimg.com/680/480/any",
        numeroLike: "144"
    },
    { 
        id: 3, 
        nomeAutore: "Carlo Sganghero", 
        fotoAutore: "https://placeimg.com/650/480/any", 
        date: officialsDate, 
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sintvoluptate recusandae architecto. Et nihil ullam aut alias.", 
        immaginePost: "https://placeimg.com/690/480/any", 
        numeroLike: "1034"
    },
    { 
        id: 4, 
        nomeAutore: "Uccio Bonafede", 
        fotoAutore: "https://placeimg.com/660/480/any", 
        date: officialsDate, 
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exer", immaginePost: "https://placeimg.com/700/480/any", 
        numeroLike: "19" 
    }
]
for (i = 0; i < card.length; i++) {
    const currentCard = card[i]
    posts.innerHTML += `
<div id="posts" class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src=${currentCard.fotoAutore} alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${currentCard.nomeAutore} </div>
              <div class="post-meta__time">${currentCard.date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
        ${currentCard.text}
        </div>
        <div class="post__image">
          <img src= ${currentCard.immaginePost} alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">

              <button id="${currentCard.id}" class="principalButton like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>

            </div>
            <div class="likes__counter">Piace a <b id="like-counter-${currentCard.id}" class="js-likes-counter">${currentCard.numeroLike} </b> persone</div>
          </div>
        </div>
    </div>
`
}
let isClicked = false;
const bottoneMiPiace = document.querySelectorAll('.like-button');
bottoneMiPiace.forEach((button, i) => button.addEventListener('click', () => {
    const conteggioLike = document.getElementById(`like-counter-${i + 1}`);
    isClicked = !isClicked;
    let cambioLike = card[i].numeroLike;
    if (isClicked) {
        button.classList.add('like-button--liked');
        cambioLike++;
    }
    else {
        button.classList.remove('like-button--liked');
        cambioLike[i];
    }
    conteggioLike.innerText = cambioLike;
    return;
}));


