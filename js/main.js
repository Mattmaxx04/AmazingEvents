let url = document.title;
/*-------------------cards-----------------*/

let cards = document.getElementById("cards__data");

function pintarCards(card) {
  data.eventos.forEach((eventos) => {
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

function pintarUp(card) {
  let updata = document.getElementById("updata");
  data.eventos.forEach((eventos) => {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "21rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${eventos.image}" class="card-img-top card__image" alt="...">
  <div class="card-body cards__body">
    <h5 class="card-title">${eventos.name}</h5>
    <p class="card-text">${eventos.description}</p>
    <a href="./details.html?name=${eventos.name}" class="btn btn-primary">More info</a>
  </div>`;
    if (eventos.date > data.fechaActual) {
      updata.appendChild(card);
    }
  });
}

function pintarPast(card) {
  let pastdata = document.getElementById("pastdata");

  data.eventos.forEach((eventos) => {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "21rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${eventos.image}" class="card-img-top card__image" alt="...">
  <div class="card-body column-6">
    <h5 class="card-title">${eventos.name}</h5>
    <p class="card-text">${eventos.description}</p>
    <a href="./details.html?name=${eventos.name}" class="btn btn-primary">More info</a>
  </div>`;
    if (eventos.date < data.fechaActual) {
      pastdata.appendChild(card);
    }
  });
}

if (url == "Home") {
  pintarCards(cards);
} else if (url == "Upcoming Events") {
  pintarUp(cards);
} else if (url == "Past Events") {
  pintarPast(cards);
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

/*-------------------search---------------*/
let letrasEscritas;

const buscador = document.forms[7]

buscador.addEventListener("keyup", (e)=>{
  let palabras = e.target.value.toLowerCase()
  console.log(palabras)
})

/*
let searcher = document.getElementById("checks")

   searcher.addEventListener("keyup", (e) =>{
  let palabras = e.target.value.toLowerCase()
  console.log(palabras)
  let eventoFiltrado = []
  data.eventos.filter(evento => {
   if (evento.name.includes(palabras));
    eventoFiltrado.push(evento)
  })
  console.log(eventoFiltrado)
})

 /* data.eventos.forEach(evento => {
    if (evento.name.textContent.toLowerCase().includes === palabras ){
      arrayEventos.push(evento)
      console.log(arrayEventos)
    }  
  })
})
/*----------------------search-------------------- */
/*
let searcher = document.getElementById("checks");
searcher.addEventListener("keyup", (e) =>{
  let palabras = e.target.value.toLowerCase();
  let arrayEventos = [];
  data.eventos.forEach(evento => {
    if (evento.name.includes == palabras ){
      arrayEventos.push(evento)
    }
    console.log(arrayEventos);
  });*/
/*-------------------*/
