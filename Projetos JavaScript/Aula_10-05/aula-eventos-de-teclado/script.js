const linkPerfil = document.getElementById("link-perfil");
const navSecundaria = document.getElementById("nav-perfil");
const linkMeusDados = document.getElementById("link-perfil-dados");

document.addEventListener('keypress', (event) => {
  if (event.code == 'Escape') {
    navSecundaria.style.display = 'none';
  }

  if (event.code == 'Digit1') {
    if (navSecundaria.style.display == 'block') {
      linkMeusDados.click()
    } else {
        navSecundaria.style.display = 'block';
    }
  }
})