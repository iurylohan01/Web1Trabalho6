let alt = document.getElementById("alt");
let valor = document.getElementById("valor");
alt.oninput = () => {
  box.style.height = alt.value + 'px';
  valor.innerHTML = alt.value;
};

let larg = document.getElementById("larg");
let valor2 = document.getElementById("valor2");
larg.oninput = () => {
  box.style.width = larg.value + 'px';
  valor2.innerHTML = larg.value;
};

let vertical = document.getElementById("vertical");
let valor3 = document.getElementById("valor3");
vertical.oninput = () => {
  box.style.marginTop = vertical.value + 'px';
  valor3.innerHTML = vertical.value;
};

let horizontal = document.getElementById("horizontal");
let valor4 = document.getElementById("valor4");
horizontal.oninput = () => {
  box.style.marginLeft = horizontal.value + 'px';
  valor4.innerHTML = horizontal.value;
};

let box = document.getElementById("box");

var body = document.body,
  vermelho = document.querySelector('#vermelho'),
  verde = document.querySelector('#verde'),
  azul = document.querySelector('#azul'),
  vermelho_out = document.querySelector('#vermelho_out'),
  azul_out = document.querySelector('#verde_out'),
  azul_out = document.querySelector('#azul_out'),
  hex_out = document.querySelector('#hex');

function setColor() {
  var vermelho_hex = parseInt(vermelho.value, 10).toString(16),
    verde_hex = parseInt(verde.value, 10).toString(16),
    azul_hex = parseInt(azul.value, 10).toString(16),
    hex = "#" + pad(vermelho_hex) + pad(verde_hex) + pad(azul_hex);
  box.style.backgroundColor = hex;
  hex_out.value = hex;
}

function pad(n) {
  return (n.length < 2) ? "0" + n : n;
}

vermelho.addEventListener('change', function() {
  setColor();
  vermelho_out.value = vermelho.value;
}, false);
vermelho.addEventListener('input', function() {
  setColor();
  vermelho_out.value = vermelho.value;
}, false);

verde.addEventListener('change', function() {
  setColor();
  verde_out.value = verde.value;
}, false);
verde.addEventListener('input', function() {
  setColor();
  verde_out.value = verde.value;
}, false);

azul.addEventListener('change', function() {
  setColor();
  azul_out.value = azul.value;
}, false);
azul.addEventListener('input', function() {
  setColor();
  azul_out.value = azul.value;
}, false);
