const divErrorAbsoluto = document.getElementById("errorAbsolutoDIV")
const inputValorAprox = document.getElementById("valAproxInput")
const inputValorReal = document.getElementById("valRealInput")
const calcButton = divErrorAbsoluto.querySelector("button");
const resultSpace = divErrorAbsoluto.querySelector("p");

function calcularErrorAbsoluto(aproximado, real) {
    aproximado = Number(aproximado)
    real = Number(real)
    return Math.abs(real - aproximado)
}

class ErrorAbsoluto {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValorAprox.value) {
                alert("Debe ingresar un numero para el valor aproximado")
                return
            }
            if (!inputValorReal.value) {
                alert("Debe ingresar un numero para el valor real")
                return
            }
            const errorAbosulto = calcularErrorAbsoluto(inputValorAprox.value, inputValorReal.value)
            resultSpace.innerHTML = `El error absoluto es ${errorAbosulto}`
        })
    }
}
export default ErrorAbsoluto