import BinarioDecimal from "./modules/binarioADecimal.js";
import CirasSignificativas from "./modules/cifrasSignificativas.js";
import ErrorRelativoPorc from "./modules/erorRelativoPorc.js";
import ErrorAbsoluto from "./modules/errorAbsoluto.js";

const calculadoraCifrasSignificativas = new CirasSignificativas
calculadoraCifrasSignificativas.nuevoCalculo()

const calculadoraErrorAbsoluto = new ErrorAbsoluto
calculadoraErrorAbsoluto.nuevoCalculo()

const calculadoraErrorRelativoPorc = new ErrorRelativoPorc
calculadoraErrorRelativoPorc.nuevoCalculo()

const calculadoraBinarioDecimal = new BinarioDecimal
calculadoraBinarioDecimal.nuevoCalculo()