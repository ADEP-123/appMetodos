import agregarError from "./agregarError.js";

const divBinarioAFraccionario = document.getElementById("binarioFraccionarioDIV")
const inputValor = divBinarioAFraccionario.querySelector("input")
const calcButton = divBinarioAFraccionario.querySelector("button");
const resultSpace = divBinarioAFraccionario.querySelector("p");

function BinarioAFraccionario(numero) {
    numero = numero.toString()
    const regex = /^[01.]+$/;
    if (regex.test(numero) == false) {
        agregarError("Numero invalido")
        return
    }
    // Separar la parte entera de la parte decimal
    let partes = numero.split(".");
    let parteEntera = partes[0];
    let parteDecimal = partes[1] || "0"; // Si no hay parte decimal, asigna "0"

    // Sacar el signo de la parte entera
    let signo = "+"
    if (parteEntera[0] == 1) {
        signo = "-"
    }
    parteEntera = parteEntera.substring(1)

    // Convertir la parte entera a decimal
    let enteroDecimal = parseInt(parteEntera, 2);

    // Convertir la parte decimal a decimal
    let decimalDecimal = 0;
    for (let i = 0; i < parteDecimal.length; i++) {
        decimalDecimal += parseInt(parteDecimal[i]) / Math.pow(2, i + 1);
    }
    const num = enteroDecimal + decimalDecimal

    // Sumar la parte entera y la parte decimal
    let resultado = signo + num;

    return resultado;
}

class BinarioFraccionario {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValor.value) {
                agregarError("Debe ingresar un numero binario para hacer la conversion")
                return
            }
            const fraccionario = BinarioAFraccionario(inputValor.value)
            fraccionario ? resultSpace.innerHTML = `El valor en fraccionario es:<br>${fraccionario}` : null
        })
    }
}
export default BinarioFraccionario