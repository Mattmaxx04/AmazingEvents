console.log(data);


let cards = document.getElementById('cards__data');

for(let i = 0;i<data.eventos.length;i++){
    let card = document.createElement('div');
    card.className = "card";
    card.style.width = '20rem';
    card.style.padding = '0.5rem';
    card.innerHTML = `<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.eventos[i].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`
    cards.appendChild(card);
}

