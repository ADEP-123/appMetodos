import BinarioDecimal from "./modules/binarioADecimal.js";
import CirasSignificativas from "./modules/cifrasSignificativas.js";
import DecimalBinario from "./modules/decimalABinario.js";
import ErrorRelativoPorc from "./modules/erorRelativoPorc.js";
import ErrorAbsoluto from "./modules/errorAbsoluto.js";
import FraccionarioBinario from "./modules/fraccionarioABinario.js";

const calculadoraCifrasSignificativas = new CirasSignificativas
calculadoraCifrasSignificativas.nuevoCalculo()

const calculadoraErrorAbsoluto = new ErrorAbsoluto
calculadoraErrorAbsoluto.nuevoCalculo()

const calculadoraErrorRelativoPorc = new ErrorRelativoPorc
calculadoraErrorRelativoPorc.nuevoCalculo()

const calculadoraBinarioDecimal = new BinarioDecimal
calculadoraBinarioDecimal.nuevoCalculo()

const calculadoraDecimalBinario = new DecimalBinario
calculadoraDecimalBinario.nuevoCalculo()

const calculadoraFraccionarioBinario = new FraccionarioBinario
calculadoraFraccionarioBinario.nuevoCalculo()
