const btnOrdenarPorPreco= document.getElementById("btnOrdenarPorPreco")
 
btnOrdenarPorPreco.addEventListener("click", ordenarPorPreco)

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) =>
    a.preco - b.preco);
    sectionLivros.innerHTML = "";
   let livrosDescOrd =  aplicarDescontoNosLivros(livrosOrdenados)
     exibirLivrosNaTela(livrosDescOrd)
}