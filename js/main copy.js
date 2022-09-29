let url = document.title;
/*-------------------cards-----------------*/
let eventosFinal = [];

let cards = document.getElementById("cards__data");

function pintarCards(events) {
  cards.innerHTML = "";
  events.forEach((eventos) => {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "21rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${eventos.image}" class="card-img-top card__image" alt="...">
    <div class="card-body">
      <h5 class="card-title">${eventos.name}</h5>
      <p class="card-text">${eventos.description}</p>
      <a href="./details.html?_id=${eventos._id}" class="btn btn-primary">More info</a>
    </div>`;
    cards.appendChild(card);
  });
}

function eventosUp(events) {
  events.filter((events) => {
    if (events.date < data.currentDate) {
      eventosFinal.push(events);
    }
  });
}

function eventosPast(events) {
  events.filter((events) => {
    if (events.date > data.currentDate) {
      eventosFinal.push(events);
    }
  });
}

/*--------------search old----------
let searcher = document.getElementById("searchbox");

searcher.addEventListener("keyup", () => {
  search(eventosFinal)
});

function search(events){
    let palabras = searcher.value.toLowerCase();
  let eventoFiltrado = [];
  events.filter((events) => {
    if (events.name.toLowerCase().includes(palabras)) {
      eventoFiltrado.push(events);
    }
  });
  pintarCards(eventoFiltrado);
}*/


if (url == "Home") {
  eventosFinal = data.events;
  pintarCards(eventosFinal);
} else if (url == "Upcoming Events") {
  eventosUp(data.events);
  pintarCards(eventosFinal);
} else if (url == "Past Events") {
  eventosPast(data.events);
  pintarCards(eventosFinal);
}

/*-------------------show category checks-----------------*/

let categorys = [];
let checks = document.getElementById("checks");

function pintarChecks(checks) {
  data.events.forEach((category) => {
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

