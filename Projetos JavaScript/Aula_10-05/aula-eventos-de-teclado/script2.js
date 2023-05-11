const PaginaInicial = document.getElementById("pagina-inicial");

document.addEventListener('keypress', (event) => {
  if (event.code == 'Backspace') {
    PaginaInicial.click();
  }
})