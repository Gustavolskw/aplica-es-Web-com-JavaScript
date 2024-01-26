

 let Real = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
 });
       
function exibirLivrosNaTela(listaDeLivros) {
 valotTotalDelivrosDispon.innerHTML=""
  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
    let preco = livro.preco; 
      
     
      
      sectionLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
      <h2 class="livro__titulo">
       ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${Real.format(preco)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    
   
    });
}
/*
function verificaDisponibilidade(livro) {
  if (livro.quantidade >= 1) {
    return "livro__imagens"
  } else {
    return "livro__imagens indisponivel"
  }
}
*/
