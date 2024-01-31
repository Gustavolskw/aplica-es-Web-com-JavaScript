import { connApi } from "./conectaApi.js";

const formu = document.querySelector("[data-formulario]")
async function criarVideo(event) {
    event.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await connApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";

}

formu.addEventListener("submit", event => criarVideo(event))
