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