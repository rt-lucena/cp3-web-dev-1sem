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

//Função do Contato
function enviar_contato(){
    function contemApenasNumeros(texto) {
        return /^[0-9]+$/.test(texto);
    }    
    var nome = document.getElementById("Nome").value
    var tel = document.getElementById("Tel").value
    var email = document.getElementById("E-mail_contato").value
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome != "" && tel != "" && email != ""){
        if (regex.test(email) && contemApenasNumeros(tel) ) {
            alert("Contato enviado com sucesso ✅")
            window.location.href = "index.html"
        } else {
            alert("Contato inválido ❌");
        }


    }else{
        alert("Existem campos não preenchidos")
    }
}

//Função do login
function teste_log(){
    var log = document.getElementById("e-mail").value;
    var pass = document.getElementById("password").value;
    if(log != "" && pass != ""){
        if (log == 'abc@gmail.com' && pass == '123456789'){
            alert("Dados validados\nBem vindo novamente")
            window.location.href = "quiz.html"

        }
        else{
            alert("E-mail ou senha incorreta")
        }
    }else{
        alert("Campos não preenchindos")
    }
}

//Quiz
function startQuiz() {
    var score = 0;

    var questions = [
    "Qual é o ingrediente principal do prato italiano 'Carbonara'?",
    "Qual é o país de origem do sushi?",
    "O que é utilizado para fazer um molho pesto tradicional?",
    "Qual é o prato típico mexicano feito com tortilhas de milho enroladas?",
    "Qual é o nome do prato italiano feito com fatias de berinjela empanadas e assadas com molho de tomate e queijo?",
    "O que é utilizado como base para fazer uma paella tradicional espanhola?",
    "Qual é o nome da técnica de cozimento onde os alimentos são selados rapidamente em uma panela muito quente?",
    "Qual é o doce francês feito de clara de ovo batida com açúcar e assada em forno baixo?",
    "Qual é o nome do prato de origem indiana feito de arroz temperado e misturado com diversos ingredientes, como legumes, carne ou frutos do mar?",
    "O que é utilizado como ingrediente principal em uma mousse de chocolate?"
];

    var answers = [
    "Ovo",
    "Japão",
    "Manjericão, azeite, pinhões, queijo parmesão",
    "Taco",
    "Parmigiana",
    "Arroz",
    "Sautée",
    "Soufflé",
    "Biryani",
    "Chocolate"
    ];

    for (var i = 0; i < questions.length; i++) {
        var response = prompt(questions[i]);
        if (response == answers[i]) {
            score++;
        }
    }

    alert("Você acertou " + score + " de " + questions.length + " perguntas!");
}