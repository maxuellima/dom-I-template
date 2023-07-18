const valorParagrafo = document.getElementById("paragrafo")
const valorDoInput = document.getElementById("texto")

valorParagrafo.innerHTML += " Maxuel"

const digitarNovoValor = () => {
    
    console.log(valorDoInput.value)

}

const substituirValorP = () => {
    valorParagrafo.innerHTML = valorDoInput.value
}