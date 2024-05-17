const divErrorRelativoPorc = document.getElementById("errorRelativPorcDIV")
const inputValorAprox = divErrorRelativoPorc.querySelector("#valAproxInput")
const inputValorReal = divErrorRelativoPorc.querySelector("#valRealInput")
const calcButton = divErrorRelativoPorc.querySelector("button");
const resultSpace = divErrorRelativoPorc.querySelector("p");

function calcularErrores(valorReal, valorAproximado) {
    // Calcular el error absoluto
    let errorAbsoluto = Math.abs(valorReal - valorAproximado);

    // Calcular el error relativo
    let errorRelativo = (errorAbsoluto / Math.abs(valorReal)).toFixed(3)

    // Calcular el error relativo porcentual
    let errorRelativoPorcentual = (errorRelativo * 100).toFixed(3);

    // Devolver los resultados como un objeto
    return {
        errorRelativo,
        errorRelativoPorcentual
    };
}

class ErrorRelativoPorc {
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
            const errores = calcularErrores(inputValorAprox.value, inputValorReal.value)
            resultSpace.innerHTML = `El error relativo es ${errores.errorRelativo} y el procentual es ${errores.errorRelativoPorcentual}`
        })
    }
}
export default ErrorRelativoPorc