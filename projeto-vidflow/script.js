    const containerVideos = document.querySelector(".videos__container")


let timerInSeconds = 5;









    async function buscarEMostrarVideos() {
        try {
            const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
            videos.forEach(video => {
                if (video.categoria == "") {
                    throw new Error("Categorias nao encontradas!!!!")
                }
                containerVideos.innerHTML += `
                <li class="videos__item border border-1 border-secondary rounded-2 mb-4 px-0 col-lg-3 col-sm-12 col-md-5 mx-4 ">
                <div>
                <iframe class="border border-1" src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video px-1 ">
                        <div class="d-flex py-2 ">
                            <img class="img-canal p-1" src="${video.imagem}" alt="Logo do canal">
                            <h3 class="titulo-video text-start overflow-auto text-wrap">${video.titulo}</h3>
                        </div>
                        <p class="titulo-canal text-start postion-absolute bottom-0 pb-2 ps-1">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </div>                                                  
                </li>`
            })
        } catch (e) {
             setInterval(() => {

timerInSeconds -= 1;

   containerVideos.innerHTML = `
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="position-absolute top-50 start-50 translate-middle  p-md-4">
               <p class="text-wrap fs-5 d-md-none d-sm-block w-100 fw-bold lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span><br>
                reloading in...${timerInSeconds}
                   </p>

                    <p class=" text-wrap fs-3 d-none d-md-block d-xl-none w-100 fw-bold lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span> <br>
                   reloading in...${timerInSeconds}  
                </p>
                
                    <p class=" text-wrap fs-1 d-none d-xl-block d-md-none w-100 fw-bold  lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span> 
                <br> 
                   reloading in...${timerInSeconds}  
                </p>
                     <div class="spinner-border text-danger mt-5" Style="font-size:4rem; width:5rem; height:5rem" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
               </div>
                  
            </div>
               `;
            containerVideos.classList.add('justify-content-center')

  if (timerInSeconds === 0) {
    window.location.reload();
  }
}, 1000);
           
           
            
        }/* finally {
            alert("conexçao bem sucedida")
            
        }
        */
    }
buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");
barraDePesquisa.addEventListener("input", filtrarPesquisa)

function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}
const botaoCategoria = document.querySelectorAll(".superior__item")
botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => 
        filtrarPorCategoria(nomeCategoria))
})
 
function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll(".videos__item")
    for (let video of videos) {
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();
        if (!categoria.includes(valorFiltro)&&valorFiltro!="tudo") {
            video.style.display = "none"
        } else {
            video.style.display = "block"
        }
    }
}
