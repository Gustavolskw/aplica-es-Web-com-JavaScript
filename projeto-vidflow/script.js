const containerVideos = document.querySelector(".videos__container")





const api = fetch("http://localhost:3000/videos")
    .then(res => res.json())
    .then(videos =>
        videos.forEach(video => {
            containerVideos.innerHTML += `
            <li class="videos__item g-3 mb-5 m-2 border border-1 rounded-2 p-4">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                  <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                 <h3 class="titulo-video ps-2">${video.titulo}</h3>
                 <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>`
        }))
    .catch((e) => {
            containerVideos.innerHTML= `<p class="text-danger fs-1 fw-bold text-bg-dark  ">Houve um erro ao Carregar os videos: <br>
            ${e}</p>`
        })