import isCpf from "./validaCpf.js"




const camposDoForm = document.querySelectorAll("[required]")
camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
})

function verificaCampo(campoFunc) {
    if (campoFunc.name == "cpf" && campoFunc.value.length >= 11) {
        isCpf(campoFunc)
    }
}