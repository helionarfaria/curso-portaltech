const blog_titles = document.getElementsByClassName('blog_title');
const input_name = document.getElementById('nome');
const post2 = document.getElementById('post02').innerText;
const form = document.getElementById('formulario').innerText;
const sections = document.getElementById('posts').innerText;
const data01 = document.getElementById('post01-data').innerText;
const data02 = document.getElementById('post02-data').innerText;
const texto01 = document.getElementById('post01-texto').innerText;
const texto02 = document.getElementById('post02-texto').innerText;
const lista_redes_itens = document.getElementsByClassName('lista_redes_item');
const post2_texts = document.getElementsByClassName('arr-teste');

function printListText(array){
    for(let i = 0; i < array.length; i++){ 
        console.log(array[i].innerText);
    };
};

printListText(lista_redes_itens);
console.log('________________________________________________')
printListText(post2_texts)