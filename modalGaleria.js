const galeriaModal = document.querySelector ('#galeria-modal');
const imagemModal = document.querySelector ('#galeria__modal-img');
const fecharBt = document.querySelector ('#fechar');

fecharBt.addEventListener ('click', ()=>{
    galeriaModal.style.display = 'none';
})

imagemModal.addEventListener ('click', function abrirGaleria(src){
    if (galeriaModal.style.display === 'flex'){
        return
    }else {
        abrirGaleria();
    }
})

function abrirGaleria(src) {
    galeriaModal.style.display = 'flex';
    imagemModal.style.transform = "scale(1)";
    imagemModal.src = src;
}