let parametrosUrl = location.search;
let parametros = new URLSearchParams(parametrosUrl);
let id = parametros.get("_id");

let eventoFiltrado = data.events.filter((events) => {
  return events._id;
});

let eventoEncontrado = eventoFiltrado.find((events) => events._id == id);
console.log(eventoEncontrado);

showCard(eventoEncontrado);

function showCard(events) {
  let people = assistanceOrEstimate();

  function assistanceOrEstimate() {
    if (events.assistance == undefined) {
      return `Estimate: ${events.estimate}`;
    } else {
      return `Assistance: ${events.assistance}`;
    }
  }
  console.log(people);
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
  </div>
    `;
  container.appendChild(div);
}
