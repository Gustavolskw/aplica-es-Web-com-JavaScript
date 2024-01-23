const botaoFiltro = document.querySelectorAll(".btn")

botaoFiltro.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ?
        livros.filter(livro => livro.quantidade>0) :
        livros.filter(livro => livro.categoria == categoria)
    sectionLivros.innerHTML = "";
    let livrosFiltradosDesconto = aplicarDescontoNosLivros(livrosFiltrados)
    exibirLivrosNaTela(livrosFiltradosDesconto);
        
    
}