//Alerta de Boas-vindas (index.html)
window.onload = function() {
    if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
        alert("Seja bem-vindo!");
    }
}

//Função que muda a cor do site
var cores = ['slategray', 'khaki', 'olivedrab', 'white'];
var corAtual = 0;

function mudarCor() {
    document.body.style.backgroundColor = cores[corAtual % cores.length];
    corAtual++;
}

//SLIDESHOW
let imagens=['./src/assets/slide1.jpg','./src/assets/slide2.jpg','./src/assets/slide3.jpg','./src/assets/slide4.jpg'];
let index =0;
let time= 3000;

//FUNÇÃO SLIDESHOW
function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();