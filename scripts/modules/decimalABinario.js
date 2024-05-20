import agregarError from "./agregarError.js";

const divDecimalABinario = document.getElementById("decimalBinarioDiv")
const inputValor = divDecimalABinario.querySelector("input")
const calcButton = divDecimalABinario.querySelector("button");
const resultSpace = divDecimalABinario.querySelector("p");

function decimalABinario(decimal) {
    decimal = Number(decimal)
    // Verificar si la entrada es un número decimal válido
    if (isNaN(decimal) || !Number.isInteger(decimal) || decimal < 0) {
        agregarError("Número decimal inválido")
        return null;
    }

    // Convertir el número decimal a binario
    let binario = decimal.toString(2);

    return binario;
}

class DecimalBinario {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValor.value) {
                agregarError("Debe ingresar un numero decimal para hacer la conversion")
                return
            }
            const binario = decimalABinario(inputValor.value)
            binario ? resultSpace.innerHTML = `El valor en binario es ${binario}` : null
        })
    }
}
export default DecimalBinario