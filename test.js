// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


const { fromEuroToDollar } = require('./app.js');
test('1€ shuld be 1.2', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromEuroToDollar(1);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(1.2);
});

const { fromEuroToYen } = require('./app.js');
test('1€ shuld be 1.2', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromEuroToYen(1);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(127.9);
});

const { fromEuroToGbp } = require('./app.js');
test('1€ shuld be 1.2', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromEuroToGbp(1);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(0.8);
});