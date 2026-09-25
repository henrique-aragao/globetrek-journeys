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

// Inicio do script do filtro dos cards
const filtros = document.querySelectorAll('.btn-filtro');
const cards = document.querySelectorAll('.card');

const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

const containerCards = document.querySelector('.cards');

let filtroAtual = 'todos';
let posicaoAtual = 0;

function obterCardsFiltrados() {
    if (filtroAtual === 'todos') {
        return [...cards];
    }

    return [...cards].filter(card => {
        return card.dataset.categoria === filtroAtual;
    });
}

function atualizarCarrossel() {
    const cardsFiltrados = obterCardsFiltrados();

    cards.forEach(card => {
        card.style.display = 'none';
    });

    cardsFiltrados.forEach(card => {
        card.style.display = '';
    });

    if (cardsFiltrados.length === 0) {
        return;
    }

    const larguraCard = cardsFiltrados[0].offsetWidth;

    const estiloCards = getComputedStyle(containerCards);
    const gap = parseFloat(estiloCards.gap);

    const deslocamento = larguraCard + gap;

    const movimento = posicaoAtual * deslocamento;

    containerCards.style.transform = `translateX(-${movimento}px)`;

    const ultimaPosicao = cardsFiltrados.length - 1;

    anterior.disabled = posicaoAtual === 0;
    proximo.disabled = posicaoAtual === ultimaPosicao;
}

proximo.addEventListener('click', () => {
    const cardsFiltrados = obterCardsFiltrados();

    const ultimaPosicao = cardsFiltrados.length - 1;

    if (posicaoAtual < ultimaPosicao) {
        posicaoAtual++;
        atualizarCarrossel();
    }
});

anterior.addEventListener('click', () => {
    if (posicaoAtual > 0) {
        posicaoAtual--;
        atualizarCarrossel();
    }
});

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtroAtual = filtro.dataset.filtro;
        posicaoAtual = 0;
        atualizarCarrossel();
    });
});

atualizarCarrossel();
// Fim do script do filtro dos cards

// Inicio do script da curtida
function curti(botao) {
    const gostei = botao.querySelector('.gostei');
    const id = botao.dataset.id;

    const estaCurtido = localStorage.getItem(`curtido-${id}`);

    if (estaCurtido === 'sim') {
        gostei.src = '../assets/icons/gostei-padrao.png';
        localStorage.setItem(`curtido-${id}`, 'nao');
    } else {
        gostei.src = '../assets/icons/gostei.png';
        localStorage.setItem(`curtido-${id}`, 'sim');
    }
}

const botoesCurtir = document.querySelectorAll('.botao-curtir');

botoesCurtir.forEach(botao => {
    const id = botao.dataset.id;
    const gostei = botao.querySelector('.gostei');

    if (localStorage.getItem(`curtido-${id}`) === 'sim') {
        gostei.src = '../assets/icons/gostei.png';
    }
});
// Fim do script da curtida