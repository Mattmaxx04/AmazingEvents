let arrayNumeros = [];

const formulario = document.forms[0];
const radios = document.forms[1];
const listaNumeros = document.getElementById("numberList");
const select = document.getElementById("select");


radios.addEventListener("change", superFiltro);
select.addEventListener("change", superFiltro);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = formulario[0].value;
  arrayNumeros.push(parseInt(numero));
  pintarNumeros(arrayNumeros);
});

function pintarNumeros(arrayN) {
  listaNumeros.innerHTML = " ";
  if (!arrayN.length) {
    listaNumeros.innerHTML = "<li>no hay elementos para 	mostrar</li>";
    return;
  }
  arrayN.forEach((numero) => {
    let li = document.createElement("li");
    li.innerText = numero;
    listaNumeros.appendChild(li);
  });
}


function superFiltro() {
  let filtro1 = filtrarSelect(arrayNumeros);
  let filtro2 = filtrarPorTipo(filtro1);
  pintarNumeros(filtro2);
}

pintarNumeros(arrayNumeros);

function filtrarPorTipo(arrayNumeros) {
  let radioButtons = documen.querySelectorAll("input[type='radio']");
  let arrayRadioButtons = Array.from(radioButtons);
  let radioChecked = arrayRadioButtons.find(
    (radioButton) => radioButton.checked
  );
  let valueRadio = radioChecked.value;
  let numerosFiltrados = arrayNumeros.filter(
    (numero) => numero % 2 == valueRadio || valueRadio == "all"
  );
  return numerosFiltrados;
}

function filtrarSelect(arrayNumeros) {
  let numerosFiltrados = arrayNumeros.filter((numero) => {
    switch (select.value) {
      case "all":
        return numero;
      case "1":
        if (numero < 5) {
          return numero;
        }
        break;
      case "2":
        if (numero < 10) {
          return numero;
        }
        break;
      case "3":
        if (numero > 10) {
          return numero;
        }
        break;
    }
  });
  return numerosFiltrados;
}
