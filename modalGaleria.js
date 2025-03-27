const galeriaModal = document.querySelector ('#galeria-modal');
const imagemModal = document.querySelector ('#galeria__modal-img');
const fecharBt = document.querySelector ('#fechar');



imagemModal.addEventListener ('click', function abrirGaleria(src){
    if (galeriaModal.style.display === 'flex'){
        fecharModal();
    }else {
        abrirGaleria();
    }
})

function abrirGaleria(src) {
    galeriaModal.style.display = 'flex';
    imagemModal.style.transform = "scale(1)";
    imagemModal.src = src;
}
function fecharModal (){ 
    galeriaModal.style.display = 'none';
}