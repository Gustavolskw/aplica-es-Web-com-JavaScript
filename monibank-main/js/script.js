import isCpf from "./validaCpf.js"
import maiorDeIdade from "./verificaDataNascimento.js"



const camposDoForm = document.querySelectorAll("[required]")

camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", event => event.preventDefault())

})


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campoFunc) {
    campoFunc.setCustomValidity("");
    let mensagem;
    if (campoFunc.name == "cpf" && campoFunc.value.length >= 11) {
        isCpf(campoFunc)
    }
    if (campoFunc.name == "aniversario" && campoFunc.value != "") {
        maiorDeIdade(campoFunc)
    }
    tiposDeErro.forEach(erro => {
        if (campoFunc.validity[erro]) {
            mensagem = mensagens[campoFunc.name][erro];

        }

    })
    const mensagemDeErro = campoFunc.parentNode.querySelector(".mensagem-erro")
    const validadorDeInput = campoFunc.checkValidity()
    if (!validadorDeInput) {
        mensagemDeErro.textContent = mensagem;
    } else {
        mensagemDeErro.textContent = "";
    }
}
