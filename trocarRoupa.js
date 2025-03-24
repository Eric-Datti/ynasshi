const roupa1 = document.querySelector ('#img-pequena-1');
const roupa2 = document.querySelector ('#img-pequena-2');
const roupa3 = document.querySelector ('#img-pequena-3');
const roupa4 = document.querySelector ('#img-pequena-4');
const imagemModelo = document.querySelector ('#imagem-modelo');

roupa1.addEventListener ('click', () => {
    imagemModelo.setAttribute ('src', './assets/img/teste2 (vai ser apagado).png');
})

roupa2.addEventListener ('click', () => {
    imagemModelo.setAttribute ('src', './assets/img/yna.png');
})

roupa3.addEventListener ('click', () => {
    imagemModelo.setAttribute ('src', './assets/img/bg_Gawr-Gura_01.png');
})

roupa4.addEventListener ('click', () => {
    imagemModelo.setAttribute ('src', './assets/img/teste2 (vai ser apagado).png');
})