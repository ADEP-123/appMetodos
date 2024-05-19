import BinarioDecimal from "./modules/binarioADecimal.js";
import BinarioFraccionario from "./modules/binarioAFraccionario.js";
import CirasSignificativas from "./modules/cifrasSignificativas.js";
import DecimalBinario from "./modules/decimalABinario.js";
import ErrorRelativoPorc from "./modules/erorRelativoPorc.js";
import ErrorAbsoluto from "./modules/errorAbsoluto.js";
import FraccionarioBinario from "./modules/fraccionarioABinario.js";
import BinarioExponente from "./modules/puntoFlot.js";

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

const calculadoraBinarioFraccionario = new BinarioFraccionario;
calculadoraBinarioFraccionario.nuevoCalculo()

const calculadoraBinarioAExponente = new BinarioExponente;
calculadoraBinarioAExponente.nuevoCalculo()
