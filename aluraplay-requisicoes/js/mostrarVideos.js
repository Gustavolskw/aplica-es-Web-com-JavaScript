import { connApi } from "./conectaApi.js";


const lista = document.querySelector("[data-lista]")

export default function constriCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML += `
        <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`
    return video;

}

async function listaVideos() {
    try {
        const listaApi = await connApi.listaVideos();
        listaApi.forEach(Element => lista.appendChild(constriCard(Element.titulo, Element.descricao, Element.url, Element.imagem)))
    }
    catch (erro) {
        lista.innerHTML = `<h2 class= "mensagem__titulo">Não foi possível carregar a lista de Vídeos ${erro}</h2>`
    }

}

listaVideos();