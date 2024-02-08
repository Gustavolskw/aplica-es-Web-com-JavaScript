const btnInitCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takeShot = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
let imagemURL = "";
const btnEnviarFoto = document.querySelector("[data-enviar]")



btnInitCamera.addEventListener("click", async function () {
    const initVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

    btnInitCamera.style.display = "none"
    campoCamera.style.display = "block"
    video.srcObject = initVideo;
})

takeShot.addEventListener("click", function () {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
    imagemURL = canvas.toDataURL("Image/jpg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})





btnEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = '../pages/abrir-conta-form-3.html';
})