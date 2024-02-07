export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity("Usuario Menor de Idade")
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const datacomparing = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= datacomparing
}