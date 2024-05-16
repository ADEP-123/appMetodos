const divCifrasSignificativas = document.getElementById("cifrasSignificativasDIV")
const inputCifras = divCifrasSignificativas.querySelector("input")
const buttonCifras = divCifrasSignificativas.querySelector("button");
const resultCifras = divCifrasSignificativas.querySelector("p");

function contarCifrasSignificativas(numero) {

    let strNumero = numero.toString().trim();

    // Si el número es negativo, eliminar el signo negativo para el conteo
    if (strNumero.startsWith('-')) {
        strNumero = strNumero.slice(1);
    }

    // Manejo de números en notación científica
    if (strNumero.includes('e') || strNumero.includes('E')) {
        let partes = strNumero.split(/[eE]/);
        let significante = partes[0].replace('.', '').replace(/^0+|0+$/g, '');
        return significante.length;
    }

    // Eliminar el punto decimal
    strNumero = strNumero.replace('.', '');

    // Eliminar ceros iniciales y finales
    strNumero = strNumero.replace(/^0+/, '').replace(/0+$/, '');

    // La longitud del resultado es el número de cifras significativas
    return strNumero.length;
}

class CirasSignificativas {
    nuevoCalculo = () => {
        // Event listner for the speed range input
        buttonCifras.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!inputCifras.value) {
                alert("Debe ingresar un numero para calcular")
                return
            }
            const cantidadCifras = contarCifrasSignificativas(inputCifras.value)
            resultCifras.innerHTML = `La cantidad de cifras significativas es ${cantidadCifras}`

        })

    }
}
export default CirasSignificativas