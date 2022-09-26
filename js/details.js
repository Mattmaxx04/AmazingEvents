let parametrosUrl = location.search;
let parametros = new URLSearchParams(parametrosUrl);
let names = parametros.get("name");
console.log(names);

let eventoFiltrado = data.eventos.filter((evento) => {
  return evento.name;
});
console.log(eventoFiltrado);

let eventoEncontrado = eventoFiltrado.find((evento) => evento.name == names);
console.log(eventoEncontrado);
showCard(eventoEncontrado);

function showCard(evento) {
  let container = document.getElementById("details");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.className = "card";
  div.style.maxwidth = "80%";
  div.style.minHeight = "20rem";
  div.style.padding = "0.5rem";
  div.innerHTML = `<div class="detail__card">
    <div class="col-md-6">
      <img src="${evento.image}" class="img-fluid detail__image" alt="eventimage">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title"> ${evento.name}</h5>
        <p class="card-text detail__p"> ${evento.description}</p>
        <p class="card-text detail__p">Date: ${evento.date}</p>
        <p class="card-text detail__p">Place: ${evento.place}</p>
        <p class="card-text detail__p">Capacity: ${evento.capacity}</p>
        <h4 class="price">Price: $${evento.price}</p>
      </div>
    </div>
  </div>
    `;
  container.appendChild(div);
}
