function filtrarProdutos() {
    let input = document.getElementById('inputBusca').value.toLowerCase();
    let cards = document.getElementsByClassName('produto-card');

    for (let i = 0; i < cards.length; i++) {
        let nome = cards[i].querySelector('.nome').innerText.toLowerCase();
        if (nome.includes(input)) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}