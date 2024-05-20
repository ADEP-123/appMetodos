import agregarError from "./agregarError.js";

const divFraccionarioABinario = document.getElementById("fraccBinarioDIV")
const inputValor = divFraccionarioABinario.querySelector("input")
const calcButton = divFraccionarioABinario.querySelector("button");
const resultSpace = divFraccionarioABinario.querySelector("p");

function fraccionarioABinario(numero) {
    numero = Number(numero)
    // Verificar si la entrada es un número válido
    if (isNaN(numero)) {
        agregarError("Número inválido")
        return;
    }

    // Obtener el signo del número
    let signo = numero < 0 ? 1 : 0;

    // Convertir la parte entera a binario (sin el signo)
    let parteEntera = Math.floor(Math.abs(numero)).toString(2);

    // Convertir la parte fraccionaria a binario
    let parteFraccionaria = "";
    let fraccion = Math.abs(Math.abs(numero) - Math.floor(Math.abs(numero)));
    fraccion = fraccion.toFixed(4)
    while (fraccion !== 0 && parteFraccionaria.length < 20) {
        fraccion *= 2;
        parteFraccionaria += Math.floor(fraccion);
        fraccion -= Math.floor(fraccion);
    }

    // Combinar las partes en la mantisa base con signo
    let mantisa = parteEntera + "." + parteFraccionaria;

    // Devolver el resultado con el signo y la mantisa
    return signo + mantisa;
}

class FraccionarioBinario {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValor.value) {
                agregarError("Debe ingresar un numero fraccionario para hacer la conversion")
                return
            }
            const binario = fraccionarioABinario(inputValor.value)
            binario ? resultSpace.innerHTML = `El valor en binario (MCS) es:<br>${binario}` : null
        })
    }
}
export default FraccionarioBinario