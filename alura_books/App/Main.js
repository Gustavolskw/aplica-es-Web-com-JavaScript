let livros = [];
const endpoiuntAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"






getBuscarLivrosDaApi();
const sectionLivros = document.getElementById("livros")

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpoiuntAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDescontoNosLivros(livros);
    exibirLivrosNaTela(livrosComDesconto); 

}

