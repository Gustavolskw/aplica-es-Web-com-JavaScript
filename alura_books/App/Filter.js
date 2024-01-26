const botaoFiltro = document.querySelectorAll(".btn")

botaoFiltro.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ?
        FiltrarDisponivilidade() : filtrarCategoria(categoria);
    sectionLivros.innerHTML = "";
    let livrosFiltradosDesconto = aplicarDescontoNosLivros(livrosFiltrados)
    exibirLivrosNaTela(livrosFiltradosDesconto);

    if (categoria == "disponivel") {
        const valorTotalLivros = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDisponivelNaTela(valorTotalLivros);
} 
}
function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function FiltrarDisponivilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDisponivelNaTela(valorTotal) {
  
    valotTotalDelivrosDispon.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por <span id="valor">${Real.format(valorTotal)}</span></p>
    </div>`;
}