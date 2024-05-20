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