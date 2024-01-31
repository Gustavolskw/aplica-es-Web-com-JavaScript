import { connApi } from "./conectaApi.js";
import constriCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault();

    const pesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await connApi.buscaVideos(pesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    busca.forEach(element => lista.appendChild(
        constriCard(element.titulo, element.descricao, element.url, element.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento))