let url = document.title;
/*-------------------cards-----------------*/
if (url == "Home") {
  let cards = document.getElementById("cards__data");

  for (let i = 0; i < data.eventos.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "20rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.eventos[i].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">More info</a>
    </div>`;
    cards.appendChild(card);
  }
} else if (url == "Upcoming Events") {
  let updata = document.getElementById("updata");
  for (let i = 0; i < data.eventos.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "20rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.eventos[i].name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">More info</a>
  </div>`;
    if (data.eventos[i].date > data.fechaActual) {
      updata.appendChild(card);
    }
  }
} else if (url == "Past Events") {
  let pastdata = document.getElementById("pastdata");

  for (let i = 0; i < data.eventos.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "20rem";
    card.style.padding = "0.5rem";
    card.innerHTML = `<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.eventos[i].name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">More info</a>
  </div>`;
    if (data.eventos[i].date < data.fechaActual) {
      pastdata.appendChild(card);
    }
  }
}

/*-------------------checks-----------------*/


if (url == "Home" || url == "Past Events" || url == "Upcoming Events" ) {
  let categorys = [];
let checks = document.getElementById("checks");

data.eventos.forEach(category => {
  if (!categorys.includes(category.category)) {
    categorys.push(category.category);
  }
});

categorys.forEach(category => {
  let check = document.createElement("div");
  check.className = `form-check form-switch d-flex flex-wrap`;
  check.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault ${category}">
<label class="form-check-label" for="flexSwitchCheckDefault"> <h4>${category}</h4> </label>`;
  checks.appendChild(check);
});
  }




  /*-------------------------pruebas------------------*/
/*
let categorys = [];
let checks = document.getElementById("checks");

data.eventos.forEach(category => {
  if (!categorys.includes(category.category)) {
    categorys.push(category.category);
  }
});

categorys.forEach(category => {
  let check = document.createElement("div");
  check.className = `form-check form-switch d-flex flex-wrap`;
  check.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
<label class="form-check-label" for="flexSwitchCheckDefault"> <h5>${category}</h5> </label>`;
  checks.appendChild(check);
});/*

/*
let checks = document.getElementById('checks');
for(let i = 0;i<data.eventos.length;i++){
  let check = document.createElement('div');
  check.className = `form-check form-switch d-flex flex-wrap`;  
  check.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault"> <h5>${data.eventos[i].category}</h5> </label>`
  checks.appendChild(check);
}
*/
