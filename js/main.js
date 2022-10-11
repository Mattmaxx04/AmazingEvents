/*-------------------btn to top-----------------*/
const toTop = document.querySelector(".btnup");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
/*-------------------cards-----------------*/
let eventosFinal = [];
const URI = "https://amazing-events.herokuapp.com/api/events";
traerDatos(URI);

let cards = document.getElementById("cards__data");
let article = document.getElementById("notfound");
let div = document.createElement("div") 

function notFound(){  
  div.className = "notFound"
  div.innerHTML = `<img src="./assets/notfound.png" class="img__notfound" alt="...">`;
  article.appendChild(div);
}

function pintarCards(events) {   
  cards.innerHTML = "";   
  if (!events.length){
    notFound()
  }else{  
    div.innerHTML = ""
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
}
/*-------------------funciones filtrar por fecha-----------------*/


  
/*-------------------pintar on page-----------------*/
function traerDatos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      eventosFinal = data.events;
      if (document.title == "Home") {
        eventosFinal = data.events
      } else if (document.title == "Upcoming Events") {
        eventosFinal = eventosFinal.filter(event => event.date >= data.currentDate);    
      } else if(document.title == "Past Events") {
        eventosFinal = eventosFinal.filter(event => event.date < data.currentDate);        
      }
      pintarChecks(eventosFinal)
      pintarCards(eventosFinal)
    });
}


/*-------------------funcion de busqueda-----------------*/

let searcher = document.getElementById("searchbox");

searcher.addEventListener("keyup", () => {
  superFiltro()
});

function search(events) {
  let palabras = searcher.value.toLowerCase();
  let eventoFiltrado = [];
  events.filter((events) => {
    if (events.name.toLowerCase().includes(palabras)) {
      eventoFiltrado.push(events);
    }
  });
  
  return eventoFiltrado;
}




/*-------------------mostrar checkbox por categoria-----------------*/

let categorys = [];
let checks = document.getElementById("checks");

function pintarChecks(events) {
  events.forEach((category) => {
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


/*-------------------filtro por checkbox-----------------*/

let switches = document.querySelector("form");

switches.addEventListener("click", () => {
  superFiltro()
});

function filtrarPorCategoria(events) {
  let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  let arrayCheckBoxes = Array.from(checkBoxes);
  let inputCheckers = arrayCheckBoxes.filter((checkBox) => checkBox.checked);
  let valueCheckers = inputCheckers.map((input) => input.value);
  let filtro = [];
  events.filter((event) => {
    valueCheckers.forEach((category) => {
      if (category == event.category.replace(" ", "-")) {
        filtro.push(event);
      }
    });
  });
  if (!filtro.length) {
    filtro = events;
  }
  return filtro;
}
/*-------------------Funcion super filtro-----------------*/
function superFiltro(){
  let filtroCategoria = filtrarPorCategoria(eventosFinal);
  let filtradoTexto = search(filtroCategoria); 
  
  pintarCards(filtradoTexto)

}


