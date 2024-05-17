const divBinarioADecimal = document.getElementById("binarioDecimalDiv")
const inputValor = divBinarioADecimal.querySelector("#binDecInput")
const calcButton = divBinarioADecimal.querySelector("button");
const resultSpace = divBinarioADecimal.querySelector("p");

function binarioADecimal(binario) {
    // Verificar si la entrada es un número binario válido
    if (!/^[01]+$/.test(binario)) {
        alert("Número binario inválido")
        return
    }
    // Convertir el número binario a decimal
    let decimal = parseInt(binario, 2);

    return decimal;
}

class BinarioDecimal {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValor.value) {
                alert("Debe ingresar un numero binario para hacer la conversion")
                return
            }
            const decimal = binarioADecimal(inputValor.value)
            resultSpace.innerHTML = `El valor en decimal es ${decimal}`
        })
    }
}
export default BinarioDecimal