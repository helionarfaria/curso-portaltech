const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "You Burger",
    subtitulo: "Monte seu próprio Hamburguer!",
    data: "26/04/2023",
    texto: "Já pensou em escolher o que quer no seu Hamburguer? Com a You Burguer isso é possível! De um jeito simples, rápido e beeeem tecnológico, tudo que você precisa fazer é selecionar os ingredientes em uma tela, finalizar o pedido, e pronto!"
  },
  {
    titulo: "Folha's Pizzaria",
    subtitulo: "A clássica da região",
    data: "26/04/2023",
    texto: "Falou em pizza boa, falou em Folha's Pizzaria! Com mais de duas décadas de tradição na cidade, a Folha's sem dúvida é a melhor escolha de pizza da região! Com um ambiente que combina estilo retrô com moderno, você vai se encantar não só pelo sabor, mas também pelo local!"
  },
]

for (let i = 0; i < arrayPostagens.length; i++) {
  const article = document.createElement('article');
  article.id = `post-${i + 1}`; //ou article.setAttribute('id', 'post-2');
  
  article.innerHTML = `
  <h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
  <div class="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p>
  `
  const main = document.getElementsByClassName('main')[0];
  main.appendChild(article)
}