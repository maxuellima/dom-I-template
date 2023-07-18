const nomeDoInput = document.getElementById("nome")
const enderecoDoInput = document.getElementById("endereco")
const emailDoInput = document.getElementById("email")

const pegarNome = () => {
    console.log(nomeDoInput.value)
}
function pegarEndereco() {
   
    console.log(enderecoDoInput.value)
}

const pegarEmail = () => {
    
    console.log(emailDoInput.value)

}

//-----------> Limpar 

const limparNome = () =>{
    
    nomeDoInput.value = ""
}

const limparEndereco = () =>{
    enderecoDoInput.value = ""
}

const limparEmail = ()=>{
    emailDoInput.value = ""

}