function exibirLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        let preco = livro.preco;
       let Real = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

        sectionLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
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