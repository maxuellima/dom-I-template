let clickInicial = 0
const contarCliques = () => {
    clickInicial++
    console.log(clickInicial)
}

//Aparecer na tela
let clickInicialTela = 0;
const aparecerContadorNaTela = () =>{
    clickInicialTela ++
const contadorDeElementos = document.getElementById("contador")
contadorDeElementos.innerHTML = clickInicialTela
}