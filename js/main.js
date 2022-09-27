let url = document.title;
/*-------------------cards-----------------*/

let cards = document.getElementById("cards__data");

function pintarCards(cards, eventos) {
  cards.innerHTML = "";
  eventos.forEach((eventos) => {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "21rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${eventos.image}" class="card-img-top card__image" alt="...">
    <div class="card-body">
      <h5 class="card-title">${eventos.name}</h5>
      <p class="card-text">${eventos.description}</p>
      <a href="./details.html?name=${eventos.name}" class="btn btn-primary">More info</a>
    </div>`;
    cards.appendChild(card);
  });
}

let eventosUp = [];
data.eventos.filter((eventos) => {
  if (eventos.date < data.fechaActual) {
    eventosUp.push(eventos);
  }
});

let eventosPast = [];
data.eventos.filter((eventos) => {
  if (eventos.date > data.fechaActual) {
    eventosPast.push(eventos);
  }
});

if (url == "Home") {
  pintarCards(cards, data.eventos);
} else if (url == "Upcoming Events") {
  pintarCards(cards, eventosUp);
} else if (url == "Past Events") {
  pintarCards(cards, eventosPast);
}

/*-------------------checks order by category-----------------*/

let categorys = [];
let checks = document.getElementById("checks");

function pintarChecks(checks) {
  data.eventos.forEach((category) => {
    if (!categorys.includes(category.category)) {
      categorys.push(category.category);
    }
  });
  categorys.forEach((category) => {
    let check = document.createElement("div");
    check.className = `form-check form-switch d-flex flex-wrap`;
    check.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" 
    id="${category.replace(" ", "-")}" value="${category.replace(" ", "-")}" 
    value="${category.replace(" ", "-")}">
    <label class="form-check-label" for="${category.replace(
      " ",
      "-"
    )}"> <h4>${category}</h4> </label>`;
    checks.prepend(check);
  });
}

if (url == "Home" || url == "Past Events" || url == "Upcoming Events") {
  pintarChecks(checks);
}


let searcher = document.getElementById("searchbox");

searcher.addEventListener("keyup", (e) => {
  let palabras = searcher.value.toLowerCase();
  let eventoFiltrado = [];
  data.eventos.filter((evento) => {
    if (evento.name.toLowerCase().includes(palabras)) {
      eventoFiltrado.push(evento);
    }
  });
  pintarCards(cards, eventoFiltrado);
});


/*

checks.addEventListener("click", (e)=>{
  let checked = []
  let checkBoxes = checks.value
  for (let i = 0; i < checkBoxes.length; i++ ){
    if (checkBoxes[i].cheked){
      checked.push(checkBoxes[i].value)
    }
  }
  console.log(checked);
  //tengo que evaluar si al hacer click el checked cambio a true
  //si es true, mostrar esas cards

})*/
/*-------------------search---------------*/
