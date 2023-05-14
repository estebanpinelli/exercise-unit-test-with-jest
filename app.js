// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 127.9;
    // retornamos el valor
    return valueInYen;
}
const fromEuroToGbp = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInGbp = valueInEuro * 0.8;
    // retornamos el valor
    return valueInGbp;
}

const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromEuroToGbp,fromEuroToYen };
