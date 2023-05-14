import { categorias } from "./modelo/Categoria.js";
import { Token } from "./modelo/Token.js";

let cadInput = "";
let tablaHtml = "";
let listaTokens = {};
const boton = document.getElementById("boton");
const tabla = document.getElementById("ListaInformacion");
const elemento = document.getElementById("texto");
var cadena = false;

boton.addEventListener("click", analizar);
(() => {

    tablaHtml = tabla.innerHTML;
    tabla.innerHTML = "";
})();

function analizar() {

    // elemento = document.getElementById("texto");
    tabla.innerHTML = "";
    cadInput = elemento.value.replaceAll(" ", "");
    cadInput = cadInput.toLocaleLowerCase();
    let indice = 0;
    let token;
    let i = 0;
    
    listaTokens = [];

    while (indice < cadInput.length) {

        token = extraerSiguienteToken(indice);

         cadena = false;

        if (token != null && token.palabra.charCodeAt(0) != 10) {
            listaTokens[i] = token;
            i++;
            indice = token.indiceSgt;
        }

        //No es bueno hacerlo asi por los identificadores como numeros o identificadores ya que se sobre escriben
        // if(listaTokens[token.categoria]){
        //     listaTokens[token.categoria].cantidad = listaTokens[token.categoria].cantidad + 1;
        // }
        // else{
        //     listaTokens[token.categoria] = token;
        // }


    }

    if (listaTokens.length > 0) {
        let HTML = "";
        listaTokens.forEach((tok) => {
            HTML += tablaHtml.replaceAll("{contenido}", tok.palabra)
                .replaceAll("{tipo}", tok.categoria)
                .replaceAll("{cantidad}", tok.cantidad);

        })
        tabla.innerHTML = HTML;
    }
}

function extraerSiguienteToken(indice) {

    let token = null;

    token = extraerTipoEntero(indice, indice, 0);

    if (token)
        return token;

    token = extaerComentariosLinea(indice, indice, 0);
    if (token)
        return token;

    token = extaerComentariosBloque(indice, indice, 0);
    if (token)
        return token;


    token = extraerTipoDouble(indice, indice, 0);

    if (token)
        return token;

    token = extraerTipoCadena(indice, indice, 0);
    if (token)
        return token;

    token = extraerCondicion(indice, indice, 0);
    if (token)
        return token;

    token = extraerMientras(indice, indice, 0);
    if (token)
        return token;

    token = extraerPublic(indice, indice, 0);
    if (token)
        return token;

    token = extraerImportar(indice, indice, 0);
    if (token)
        return token;

    token = extraerReturn(indice, indice, 0);
    if (token)
        return token;

    token = extraerClase(indice, indice, 0);
    if (token)
        return token;

    token = extraerBreak(indice, indice, 0);
    if (token)
        return token;

    token = extraerSwitch(indice, indice, 0);
    if (token)
        return token;

    token = extraerCase(indice, indice, 0);
    if (token)
        return token;

    token = extraerElse(indice, indice, 0);
    if (token)
        return token;

    token = extraerPunto(indice, indice, 0);
    if (token)
        return token;

    token = extraerDosPuntos(indice, indice, 0);
    if (token)
        return token;

    token = extraerReal(indice, indice, 0);
    if (token)
        return token;

    token = extraerEntero(indice);
    if (token)
        return token;


    token = extraerOperadorLogicoAnd(indice, indice, 0)
    if (token)
        return token;

    token = extraerOperadorLogicoOr(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorDecremento(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorIncremento(indice, indice, 0);
    if (token)
        return token;


    token = extraerOperadorBitsAnd(indice);
    if (token)
        return token;

    token = extraerOperadorBitsOr(indice);
    if (token)
        return token;

    token = extraerOperadorNegacion(indice);
    if (token)
        return token;

    token = extraerOperadorRelacionalMayorIgual(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorRelacionalMenorIgual(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorRelacionalIgual(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorRelacionalDiferente(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorRelacionalMayor(indice);
    if (token)
        return token;

    token = extraerOperadorRelacionalMenor(indice);
    if (token)
        return token;

    token = extraerOperadorAsignacionMas(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorAsignacionMenos(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorAsignacionPor(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorAsignacionDiv(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorAsignacion(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorSuma(indice);
    if (token)
        return token;

    token = extraerOperadorResta(indice);
    if (token)
        return token;

    token = extraerOperadorMult(indice);
    if (token)
        return token;

    token = extraerOperadorDiv(indice);
    if (token)
        return token;

    token = extraerOperadorMod(indice)
    if (token)
        return token;

    token = extraerOperadorParentesisApertura(indice);
    if (token)
        return token;

    token = extraerOperadorParentesisCierre(indice);
    if (token)
        return token;

    token = extraerOperadorLlavesApertura(indice);
    if (token)
        return token;

    token = extraerOperadorLlavesCierre(indice);
    if (token)
        return token;

    token = extraerOperadorArregloApertura(indice);
    if (token)
        return token;

    token = extraerOperadorArregloCierre(indice);
    if (token)
        return token;

    token = extraerOperadorTerminal(indice);
    if (token)
        return token;

    token = extraerHexadecimal(indice, indice, 0);
    if (token)
        return token;

    token = extraerOperadorSeparador(indice);
    if (token)
        return token;

    token = extraerIdentificador(indice, indice, 0);
    if (token)
        return token;

    token = extraerCadenaCaracteres(indice, indice, 0);

    if (token)
        return token;

    token = extrarOperadorNoReconocido(indice);

    return token;
}

function extraerTipoEntero(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerTipoEntero(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'n' ? extraerTipoEntero(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 't' ? extraerTipoEntero(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerTipoEntero(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerTipoEntero(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'o' ? new Token(cadInput.substring(posicion, indice + 1), categorias.TipoEntero, indice + 1) : null;


    }
}

function extraerTipoDouble(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerTipoDouble(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerTipoDouble(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerTipoDouble(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'l' ? new Token(cadInput.substring(posicion, indice + 1), categorias.TipoDouble, indice + 1) : null;

    }
}

function extraerTipoCadena(indice, posicion, estado = 0) {
    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'c' ? extraerTipoCadena(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerTipoCadena(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'd' ? extraerTipoCadena(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerTipoCadena(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'n' ? extraerTipoCadena(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'a' ? new Token(cadInput.substring(posicion, indice + 1), categorias.TipoString, indice + 1) : null;

    }
}

function extraerCondicion(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 's' ? extraerCondicion(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'i' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerMientras(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'm' ? extraerMientras(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'i' ? extraerMientras(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerMientras(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'n' ? extraerMientras(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 't' ? extraerMientras(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerMientras(indice + 1, posicion, 6) : null;
        case 6:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerMientras(indice + 1, posicion, 7) : null;
        case 7:
            return obtenerTamanio() && cadInput[indice] == 's' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerPublic(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'p' ? extraerPublic(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'u' ? extraerPublic(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'b' ? extraerPublic(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'l' ? extraerPublic(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'i' ? extraerPublic(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'c' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerImportar(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'i' ? extraerImportar(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'm' ? extraerImportar(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'p' ? extraerImportar(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'o' ? extraerImportar(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerImportar(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 't' ? extraerImportar(indice + 1, posicion, 6) : null;
        case 6:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerImportar(indice + 1, posicion, 7) : null;
        case 7:
            return obtenerTamanio() && cadInput[indice] == 'r' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerClase(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'c' ? extraerClase(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'l' ? extraerClase(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerClase(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 's' ? extraerClase(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'e' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerElse(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerElse(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'l' ? extraerElse(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 's' ? extraerElse(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'e' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerReturn(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerReturn(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerReturn(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 't' ? extraerReturn(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'u' ? extraerReturn(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerReturn(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'n' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerBreak(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'b' ? extraerBreak(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'r' ? extraerBreak(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'e' ? extraerBreak(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerBreak(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'k' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerSwitch(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 's' ? extraerSwitch(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'w' ? extraerSwitch(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 'i' ? extraerSwitch(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 't' ? extraerSwitch(indice + 1, posicion, 4) : null;
        case 4:
            return obtenerTamanio() && cadInput[indice] == 'c' ? extraerSwitch(indice + 1, posicion, 5) : null;
        case 5:
            return obtenerTamanio() && cadInput[indice] == 'h' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerCase(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == 'c' ? extraerCase(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == 'a' ? extraerCase(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && cadInput[indice] == 's' ? extraerCase(indice + 1, posicion, 3) : null;
        case 3:
            return obtenerTamanio() && cadInput[indice] == 'e' ? new Token(cadInput.substring(posicion, indice + 1), categorias.PalabraReservada, indice + 1) : null;

    }
}

function extraerPunto(indice) {

    return obtenerTamanio() && cadInput[indice] == '.' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorPunto, indice + 1) : null;
}

function extraerDosPuntos(indice) {

    return obtenerTamanio() && cadInput[indice] == ':' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorDosPuntos, indice + 1) : null;
}


function extraerEntero(indice) {


    if (Number.isInteger(Number(cadInput[indice])) && cadInput[indice].charCodeAt(0) != 10) {

        let posicion = indice;

        while (indice < cadInput.length && Number.isInteger(Number(cadInput[indice])))
            indice++;

        return new Token(cadInput.substring(indice, posicion), categorias.NumeroEntero, indice);
    }

    return null;

}

function extraerReal(indice, posicion, estado = 0) {

    var token = null;

    switch (estado) {

        case 0:
            if (indice < cadInput.length && Number.isInteger(Number(cadInput[indice])))
                return extraerReal(indice + 1, posicion, 0);
            else if (indice < cadInput.length && cadInput[indice] == '.')
                return extraerReal(indice + 1, posicion, 1);
            break;

        case 1:
            if (Number.isInteger(Number(cadInput[indice])))
                return extraerReal(indice + 1, posicion, 2);
            break;

        case 2:
            if (indice >= cadInput.length || (!Number.isInteger(Number(cadInput[indice]))))
                token = new Token(cadInput.substring(posicion, indice), categorias.NumeroFlotante, indice);
            else if (indice < cadInput.length)
                return extraerReal(indice + 1, posicion, 2);
            break;
    }
    return token;

}

function extraerCadenaCaracteres(indice, posicion, estado = 0) {

    if (indice == obtenerTamanio() - 1 && cadInput[indice] != '#' && cadena == true)
        throw new Error("Cadena sin cerrar");

    switch (estado) {

        case 0:
            cadena = true;
            return obtenerTamanio() && cadInput[indice] == '#' ? extraerCadenaCaracteres(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && (cadInput[indice] != '#' && indice < obtenerTamanio()) ? extraerCadenaCaracteres(indice + 1, posicion, 1) : new Token(cadInput.substring(posicion, indice + 1), categorias.CadenaCaracteres, indice + 1);

    }
}

function extraerIdentificador(indice, posicion, estado) {

    var token = null;

    switch (estado) {

        case 0:
            if (indice < cadInput.length && cadInput[indice] == '_')
                return extraerIdentificador(indice + 1, posicion, 1);
            break;
        case 1:
            if (indice < cadInput.length && (cadInput[indice].charCodeAt(0) >= 97) && (cadInput[indice].charCodeAt(0) <= 122))
                return extraerIdentificador(indice + 1, posicion, 2);

            break;
        case 2:
            if (indice >= cadInput.length || ((cadInput[indice].charCodeAt(0) < 97 || cadInput[indice].charCodeAt(0) > 122) && !Number.isInteger(Number(cadInput[indice])) && cadInput[indice] != '$' && cadInput[indice] != '_'))
                token = new Token(cadInput.substring(posicion, indice), categorias.Identificador, indice);
            else
                return extraerIdentificador(indice + 1, posicion, 2);

            break;

    }

    return token;

}

function extraerOperadorIncremento(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '+' ? extraerCase(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '+' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorIncremento, indice + 1) : null;
    }
}

function extraerOperadorDecremento(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '-' ? extraerCase(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '-' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorDecremento, indice + 1) : null;
    }
}

function extraerOperadorSuma(indice) {

    return obtenerTamanio() && cadInput[indice] == '+' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAritmetico, indice + 1) : null;
}

function extraerOperadorResta(indice) {

    return obtenerTamanio() && cadInput[indice] == '-' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAritmetico, indice + 1) : null;
}

function extraerOperadorMult(indice) {

    return obtenerTamanio() && cadInput[indice] == '*' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAritmetico, indice + 1) : null;
}

function extraerOperadorDiv(indice) {

    return obtenerTamanio() && cadInput[indice] == '/' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAritmetico, indice + 1) : null;
}

function extraerOperadorMod(indice) {

    return obtenerTamanio() && cadInput[indice] == '%' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAritmetico, indice + 1) : null;
}

function extraerOperadorBitsAnd(indice) {

    return obtenerTamanio() && cadInput[indice] == '&' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorBits, indice + 1) : null;
}

function extraerOperadorBitsOr(indice) {

    return obtenerTamanio() && cadInput[indice] == '|' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorBits, indice + 1) : null;
}

function extraerOperadorNegacion(indice) {

    return obtenerTamanio() && cadInput[indice] == '!' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorBits, indice + 1) : null;
}

function extraerOperadorLogicoAnd(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '&' ? extraerOperadorLogicoAnd(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '&' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorLigico, indice + 1) : null;

    }
}

function extraerOperadorLogicoOr(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '|' ? extraerOperadorLogicoOr(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '|' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorLigico, indice + 1) : null;

    }
}

function extraerOperadorRelacionalMayorIgual(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '>' ? extraerOperadorRelacionalMayorIgual(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorRelacional, indice + 1) : null;

    }
}

function extraerOperadorRelacionalMenorIgual(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '<' ? extraerOperadorRelacionalMenorIgual(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorRelacional, indice + 1) : null;

    }
}

function extraerOperadorRelacionalIgual(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '=' ? extraerOperadorRelacionalIgual(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorRelacional, indice + 1) : null;

    }
}

function extraerOperadorRelacionalDiferente(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '!' ? extraerOperadorRelacionalDiferente(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorRelacional, indice + 1) : null;

    }
}

function extraerOperadorRelacionalMayor(indice) {

    return obtenerTamanio() && cadInput[indice] == '>' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorRelacional, indice + 1) : null;
}

function extraerOperadorRelacionalMenor(indice) {

    return obtenerTamanio() && cadInput[indice] == '<' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorRelacional, indice + 1) : null;
}

function extraerOperadorAsignacionMas(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '+' ? extraerOperadorAsignacionMas(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorAsignacion, indice + 1) : null;

    }
}

function extraerOperadorAsignacionMenos(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '-' ? extraerOperadorAsignacionMenos(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorAsignacion, indice + 1) : null;

    }
}

function extraerOperadorAsignacionPor(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '*' ? extraerOperadorAsignacionPor(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorAsignacion, indice + 1) : null;

    }
}

function extraerOperadorAsignacionDiv(indice, posicion, estado = 0) {

    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '*' ? extraerOperadorAsignacionDiv(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(posicion, indice + 1), categorias.OperadorAsignacion, indice + 1) : null;

    }
}

function extraerOperadorAsignacion(indice) {

    return obtenerTamanio() && cadInput[indice] == '=' ? new Token(cadInput.substring(indice, indice + 1), categorias.OperadorAsignacion, indice + 1) : null;
}

function extraerOperadorParentesisApertura(indice) {

    return obtenerTamanio() && cadInput[indice] == '(' ? new Token(cadInput.substring(indice, indice + 1), categorias.ParentesisApertura, indice + 1) : null;
}

function extraerOperadorParentesisCierre(indice) {

    return obtenerTamanio() && cadInput[indice] == ')' ? new Token(cadInput.substring(indice, indice + 1), categorias.ParentesisCierre, indice + 1) : null;
}

function extraerOperadorLlavesApertura(indice) {

    return obtenerTamanio() && cadInput[indice] == '{' ? new Token(cadInput.substring(indice, indice + 1), categorias.LlavesApertura, indice + 1) : null;
}

function extraerOperadorLlavesCierre(indice) {

    return obtenerTamanio() && cadInput[indice] == '}' ? new Token(cadInput.substring(indice, indice + 1), categorias.LlavesCierre, indice + 1) : null;
}

function extraerOperadorArregloApertura(indice) {

    return obtenerTamanio() && cadInput[indice] == '[' ? new Token(cadInput.substring(indice, indice + 1), categorias.ArregloApertura, indice + 1) : null;
}

function extraerOperadorArregloCierre(indice) {

    return obtenerTamanio() && cadInput[indice] == ']' ? new Token(cadInput.substring(indice, indice + 1), categorias.ArregloCierre, indice + 1) : null;
}

function extraerOperadorTerminal(indice) {

    return obtenerTamanio() && cadInput[indice] == ';' ? new Token(cadInput.substring(indice, indice + 1), categorias.Terminal, indice + 1) : null;
}

function extraerOperadorSeparador(indice) {

    return obtenerTamanio() && cadInput[indice] == ',' ? new Token(cadInput.substring(indice, indice + 1), categorias.Separador, indice + 1) : null;
}

function extrarOperadorNoReconocido(indice) {

    if (cadInput[indice].charCodeAt(0) != 10)
        throw new Error(`Caracter ${cadInput[indice]} no identificado`);
    // return new Token(cadInput.substring(indice, indice + 1), categorias.NoReconocido, indice + 1);

}

function extaerComentariosLinea(indice, posicion, estado) {


    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '/' ? extaerComentariosLinea(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '/' ? extaerComentariosLinea(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && (cadInput[indice] != '\n' && indice < obtenerTamanio()) ? extaerComentariosLinea(indice + 1, posicion, 2) : new Token(cadInput.substring(posicion, indice + 1), categorias.ComentarioLinea, indice + 1);

    }
}

function extaerComentariosBloque(indice, posicion, estado) {


    switch (estado) {

        case 0:
            return obtenerTamanio() && cadInput[indice] == '/' ? extaerComentariosBloque(indice + 1, posicion, 1) : null;
        case 1:
            return obtenerTamanio() && cadInput[indice] == '*' ? extaerComentariosBloque(indice + 1, posicion, 2) : null;
        case 2:
            return obtenerTamanio() && (cadInput[indice] != '*' && indice < obtenerTamanio()) ? extaerComentariosBloque(indice + 1, posicion, 2) : extaerComentariosBloque(indice + 1, posicion, 3);
        case 3:
            return obtenerTamanio() && (cadInput[indice] != '/' && indice < obtenerTamanio()) ? extaerComentariosBloque(indice + 1, posicion, 2) : new Token(cadInput.substring(posicion, indice + 1), categorias.ComentarioBloque, indice + 1);

    }
}

function extraerHexadecimal(indice, posicion, estado) {

    var token = null;

    switch (estado) {

        case 0:
            if (indice < cadInput.length && cadInput[indice] == 'h')
                return extraerHexadecimal(indice + 1, posicion, 1);
            break;
        case 1:
            if (indice < cadInput.length && (((cadInput[indice].charCodeAt(0) >= 97) && (cadInput[indice].charCodeAt(0) <= 102)) || (Number.isInteger(Number(cadInput[indice])))))
                return extraerHexadecimal(indice + 1, posicion, 2);

            break;
        case 2:
            if (indice >= cadInput.length || ((cadInput[indice].charCodeAt(0) < 97 || cadInput[indice].charCodeAt(0) > 102) && !Number.isInteger(Number(cadInput[indice]))))
                token = new Token(cadInput.substring(posicion, indice), categorias.Hexadecimal, indice);
            else
                return extraerHexadecimal(indice + 1, posicion, 2);

            break;

    }

    return token;
}

function obtenerTamanio() {
    return cadInput.length;
}

