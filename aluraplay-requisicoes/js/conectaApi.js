const apiUrl = "http://3.20.222.59:8080/videos";
async function listaVideos() {

    const conn = await fetch(apiUrl);
    const connCovert = await conn.json();
    return connCovert;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const connex = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: ` ${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const connConvertida = conn.json();
    if (!connex.ok) {
        throw new Error("Nao foi possivel enviar o video")
    }
    return connConvertida;


}

async function buscaVideos(termoDeBusca) {
    if (termoDeBusca != null) {
        const conn = await fetch(apiUrl + "/" + `${termoDeBusca}`);
        const connConvertida = conn.json();
        console.log(connConvertida)
        return connConvertida;
    } else {
        const conn = await fetch(apiUrl);
        const connConvertida = conn.json();
        console.log(connConvertida)
        return connConvertida;
    }





}


export const connApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}