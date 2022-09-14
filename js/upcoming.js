console.log(data);

let updata = document.getElementById('updata');

for(let i = 0;i<data.eventos.length;i++){
  let card = document.createElement('div');
  card.className = "card";
  card.style.width = '18rem';
  card.innerHTML = `<img src="${data.eventos[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.eventos[i].name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>`
  if(data.eventos[i].date > data.fechaActual){
  updata.appendChild(card);}
}


/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

/*
let titulo = document.getElementById('tituloPrincipal')

let h3s = document.getElementsByTagName('h3')

let rojos = document.getElementsByClassName('rojo')

let main = document.getElementById('main')
*/
