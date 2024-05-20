import agregarError from "./agregarError.js"

const divPuntoFlot = document.getElementById("binarioAExponente")
const inputValor = divPuntoFlot.querySelector("#inputCalc")
const bitsMantiza = divPuntoFlot.querySelector("#bitsMantisa")
const signoMantisaSelect = divPuntoFlot.querySelector("#signoMantisa")
const signoExponenteSelect = divPuntoFlot.querySelector("#signoExponente")
const fracMantisaSelect = divPuntoFlot.querySelector("#fracMantisa")
const calcButton = divPuntoFlot.querySelector("button");
const resultSpace = divPuntoFlot.querySelector("p");

function BinarioAExponente(numero) {
    numero = numero.toString()
    const regex = /^[01]+$/;
    if (regex.test(numero) == false) {
        agregarError("Numero invalido")
        return
    }
    const bitsMantisa = Number(bitsMantiza.value)
    if (numero.length < bitsMantisa) {
        agregarError("La longitud del numero es menor a los bits de la mantisa")
    }
    // Separar la mantisa del exponente
    let mantisa = numero.slice(0, bitsMantisa)
    let exponente = numero.slice(bitsMantisa, numero.length)

    //Si es base con signo generar el signo
    let signoNum = ""
    if (signoMantisaSelect.value == "BCS") {
        mantisa[0] == 1 ? signoNum = "-" : signoNum = "+";
        mantisa = mantisa.substring(1)
    }

    //calculo de la mantisa
    let numerador = ""
    if (fracMantisaSelect.value == "FRAC") {
        let decimalDecimal = 0
        for (let i = 0; i < mantisa.length; i++) {
            decimalDecimal += parseInt(mantisa[i]) / Math.pow(2, i + 1);
        }
        numerador = decimalDecimal
    } else {
        numerador = parseInt(mantisa, 2);
    }
    let signoExp = ""
    if (signoExponenteSelect.value == "BCS") {
        exponente[0] == 1 ? signoExp = "-" : signoExp = "+";
        exponente = exponente.substring(1);
    }
    const valExp = parseInt(exponente, 2);
    return `${signoNum}${numerador}xE${signoExp}${valExp}`;
}

class BinarioExponente {
    nuevoCalculo = () => {
        calcButton.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputValor.value) {
                agregarError("Debe ingresar un numero binario para hacer la conversion")
                return
            }
            const exponente = BinarioAExponente(inputValor.value)
            exponente ? resultSpace.innerHTML = `El valor es :<br>${exponente}` : null
        })
    }
}
export default BinarioExponente