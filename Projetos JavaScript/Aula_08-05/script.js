let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  valor: 11.66,
};

const removeButton = document.getElementById('btn-subtrair-produto-01');
const addButton = document.getElementById('btn-adicionar-produto-01');
const inputQuantidade = document.getElementById('quantidade-produto-01');


function updateSubtotal(quantidadeItens) {
  valorSubtotal.innerText = (subtotalInfo.valor * quantidadeItens).toFixed(2);

  if (inputQuantidade.value == 1) {
    quantidadeSubtotal.innerText = `${quantidadeItens} item`;
  }
  else {
    quantidadeSubtotal.innerText = `${quantidadeItens} itens`;
  }

}

function additem() {
  inputQuantidade.value = Number(inputQuantidade.value) + 1;
  updateSubtotal(inputQuantidade.value);
};

function removeitem() {
  if (inputQuantidade.value > 0) {
    inputQuantidade.value = Number(inputQuantidade.value) - 1;
    updateSubtotal(inputQuantidade.value);
  }
};

addButton.addEventListener('click', () => additem());
removeButton.addEventListener('click', () => removeitem());