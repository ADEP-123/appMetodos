import agregarError from "./agregarError.js";

const divErrorAbsoluto = document.getElementById("errorAbsolutoDIV")
const inputValorAprox = divErrorAbsoluto.querySelector("#valAproxInput")
const inputValorReal = divErrorAbsoluto.querySelector("#valRealInput")
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
                agregarError("Debe ingresar un numero para el valor aproximado")
                return
            }
            if (!inputValorReal.value) {
                agregarError("Debe ingresar un numero para el valor real")
                return
            }
            const errorAbosulto = calcularErrorAbsoluto(inputValorAprox.value, inputValorReal.value)
            resultSpace.innerHTML = `El error absoluto es ${errorAbosulto}`
        })
    }
}
export default ErrorAbsoluto