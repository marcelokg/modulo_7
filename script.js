var numA = document.getElementById('num-A')
var numB = document.getElementById('num-B')
const form = document.getElementById('formulario')
var formValido = false

function validaNum(numeroA,numeroB){

    if(numeroB > numeroA){
        return true

    }else{
        return false
    }
}

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    formValido = validaNum(numA.value,numB.value)
    const txtSucesso = document.querySelector('.msg-sucesso')
    const txtErro = document.querySelector('.msg-erro')
    const msgSucesso = `Formulário enviado com sucesso!`
    const msgErro = `Número B tem que ser maior que o Número A`

    if(formValido){
        txtSucesso.innerHTML = msgSucesso
        txtSucesso.style.display = 'block'
        numA.value = ''
        numB.value = ''
        txtErro.style.display = 'none'

    }else{
        txtErro.innerHTML = msgErro
        txtErro.style.display = 'block'
        txtSucesso.style.display = 'none'
    }

})