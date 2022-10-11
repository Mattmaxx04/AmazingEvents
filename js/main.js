/*-------------------btn to top-----------------*/
const toTop = document.querySelector(".btnup");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
/*-------------------cards-----------------*/
let eventosFinal = [];
const URI = "https://amazing-events.herokuapp.com/api/events";
traerDatos(URI);

let cards = document.getElementById("cards__data");
let article = document.getElementById("notfound");
let div = document.createElement("div");

function notFound() {
  div.className = "notFound";
  div.innerHTML = `<img src="./assets/notfound.png" class="img__notfound" alt="...">`;
  article.appendChild(div);
}

function pintarCards(events) {
  cards.innerHTML = "";
  if (!events.length) {
    notFound();
  } else {
    div.innerHTML = "";
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

/*-------------------pintar on page-----------------*/
function traerDatos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      eventosFinal = data.events;
      if (document.title == "Home") {
        eventosFinal = data.events;
      } else if (document.title == "Upcoming Events") {
        eventosFinal = eventosFinal.filter(
          (event) => event.date >= data.currentDate
        );
      } else if (document.title == "Past Events") {
        eventosFinal = eventosFinal.filter(
          (event) => event.date < data.currentDate
        );
      } else if (document.title == "Details") {
        let parametrosUrl = location.search;
        let parametros = new URLSearchParams(parametrosUrl);
        let id = parametros.get("_id");
        let eventoFiltrado = eventosFinal.filter(events => {
          return events._id;
        });
        let eventoEncontrado = eventoFiltrado.find(
          (events) => events._id == id
        );

      showCard(eventoEncontrado);
      }else if(document.title == "Stats"){
        showTable()
      }
      pintarChecks(eventosFinal);
      pintarCards(eventosFinal);
    });
}

/*-------------------funcion de busqueda-----------------*/

let searcher = document.getElementById("searchbox");

searcher.addEventListener("keyup", () => {
  superFiltro();
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
  superFiltro();
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
function superFiltro() {
  let filtroCategoria = filtrarPorCategoria(eventosFinal);
  let filtradoTexto = search(filtroCategoria);

  pintarCards(filtradoTexto);
}

/*--------------Funcion show card details-----------------*/

function showCard(events) {
  let people = assistanceOrEstimate();

  function assistanceOrEstimate() {
    if (events.assistance == undefined) {
      return `Estimate: ${events.estimate}`;
    } else {
      return `Assistance: ${events.assistance}`;
    }
  }
  let container = document.getElementById("details");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.className = "card";
  div.style.maxwidth = "80%";
  div.style.minHeight = "20rem";
  div.style.padding = "0.5rem";
  div.innerHTML = `<div class="detail__card">
    <div class="col-md-6">
      <img src="${events.image}" class="img-fluid detail__image" alt="eventimage">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title"> ${events.name}</h5>
        <p class="card-text detail__p"> ${events.description}</p>
        <p class="card-text detail__p">Date: ${events.date}</p>
        <p class="card-text detail__p">Place: ${events.place}</p>
        <p class="card-text detail__p">Capacity: ${events.capacity}</p>
        <p class="card-text detail__p">${people}</p>
        <h4 class="price">Price: $${events.price}</p>
      </div>
    </div>
  </div>`;
  container.appendChild(div);
}


/*--------------Funcion table-----------------*/
let eventHighest;
let eventLowest;
let eventLarger;
let categories;
let revenues;
let percentage;
let pastCategories;
let pastRevenues;
let pastPercentage;


function showTable(){
  let table = document.getElementById("stats");
  table.innerHTML = ""
  let tableBody = document.createElement("table");
  div.className = "table";
  tableBody.innerHTML=`<thead>
  <tr>
    <th scope="col">Event with the highest percentage of attendance</th>
 
    <th scope="col">Event with the lowest percentage of attendance</th>
  
    <th scope="col">Event with larger capacity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${eventHighest}</td>
    <td>${eventLowest}</td>
    <td>${eventLarger}</td>
  </tr>            
</tbody>
</table>
<h2>Upcoming Events Statistic by category </h2>
<table class="tg">
<thead>
  <tr>
    <th scope="col">Categories</th>
  
    <th scope="col">Revenues</th>
  
    <th scope="col">Percentage of attendance</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${categories}</td>
    <td>${revenues}</td>
    <td>${percentage}</td>
  </tr>            
</tbody>
</table>
<h2>Past Events Statistic by category </h2>
<table class="tg">

<thead>
  <tr>
    <th scope="col">Categories</th>
  
    <th scope="col">Revenues</th>
  
    <th scope="col">Percentage of attendance</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${pastCategories}</td>
    <td>${pastRevenues}</td>
    <td>${pastPercentage}</td>
  </tr>            
</tbody>
  `
  table.appendChild(tableBody);  
}

/* 
<thead>
            <tr>
              <th scope="col">Events with the highest percentage of attendance</th>
           
              <th scope="col">Events with the lowest percentage of attendance</th>
            
              <th scope="col">Events with larger capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> </td>
              <td></td>
              <td></td>
            </tr>            
          </tbody>
        </table>
        <h2>Upcoming Events Statistic by category </h2>
        <table class="tg">
          
          <thead>
            <tr>
              <th scope="col">Categories</th>
            
              <th scope="col">Revenues</th>
            
              <th scope="col">Percentage of attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>            
          </tbody>
        </table>
        <h2>Past Events Statistic by category </h2>
        <table class="tg">
          
          <thead>
            <tr>
              <th scope="col">Categories</th>
            
              <th scope="col">Revenues</th>
            
              <th scope="col">Percentage of attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>            
          </tbody>
        
          */

