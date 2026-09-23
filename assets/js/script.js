// Inicio do script do menu responsivo
function menu(){
    let botaoMenu = document.getElementById('btn-menu')
    let pricipalMenu = document.getElementById('prin-menu')

    botaoMenu.classList.toggle('ativo')
    pricipalMenu.classList.toggle('aberto')

    if (botaoMenu.classList.contains('ativo')) {
        botaoMenu.innerHTML = 'X'
    } else{
        botaoMenu.innerHTML = '☰'
    }
}
// Fim do script do menu responsivo


// Inicio do script do votar ao topo
function mostrarBotaoTopo() {

    const botaoTopo = document.querySelector(".topo");

    if (window.scrollY > 200) {
        botaoTopo.style.display = "flex";
    } else {
        botaoTopo.style.display = "none";
    }
}

function voltarTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", mostrarBotaoTopo);
// Fim do script do votar ao topo

function oferta(){
    window.alert('Logo, logo você receberá ofertas exclusivas para novas viagens! ✈️')
}