    const containerVideos = document.querySelector(".videos__container")
    async function buscarEMostrarVideos() {
        try {
            const busca = await fetch("http://localhost:3000/video");
        const videos = await busca.json();
            videos.forEach(video => {
                containerVideos.innerHTML += `
                <li class=" border border-1 border-secondary rounded-2 mb-4 px-0 col-lg-2 col-sm-12 col-md-5 mx-4">
                <div>
                <iframe class="border border-1" src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video px-1 ">
                        <div class="d-flex py-2 ">
                            <img class="img-canal p-1" src="${video.imagem}" alt="Logo do canal">
                            <h3 class="titulo-video text-start overflow-auto text-wrap">${video.titulo}</h3>
                        </div>
                        <p class="titulo-canal text-start postion-absolute bottom-0 pb-2 ps-1">${video.descricao}</p>
                    </div>
                </div>                                                  
                </li>`
            })
        }catch(e) {
            containerVideos.innerHTML = `
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="position-absolute top-50 start-50 translate-middle  p-md-4">
               <p class="text-wrap fs-5 d-md-none d-sm-block w-100 fw-bold lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span>
                   </p>

                    <p class=" text-wrap fs-3 d-none d-md-block d-xl-none w-100 fw-bold lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span>   
                </p>
                
                    <p class=" text-wrap fs-1 d-none d-xl-block d-md-none w-100 fw-bold  lh-sm ">
                Houve um erro ao Carregar os videos: <br>
                <span class="text-danger">${e}</span>   
                </p>
                     <div class="spinner-border text-danger mt-5" Style="font-size:4rem; width:5rem; height:5rem" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
               </div>
                  
            </div>
               `;
            containerVideos.classList.add('justify-content-center')
           
            
            }
    }
    buscarEMostrarVideos();




