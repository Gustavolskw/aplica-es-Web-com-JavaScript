
botaoFiltro.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    let livrosFiltrados = livros.filter(livro =>
        livro.categoria == categoria)
        
    
}