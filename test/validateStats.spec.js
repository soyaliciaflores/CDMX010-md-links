const { italic } = require('colors')
const validateStatusLink = require('../index.js')
const getValidate = require('../index.js')

describe('funcion validateStatusLink', () => {
    it('Saber si es constante', () => {
        expect(validateStatusLink).toBeDefined();
    });
    it('Debería ser una función', () =>{
        expect(typeof validateStatusLink).toBe('object');
    });
});

// describe('funcion validate', () =>{
//     it('Debería ser una constante', () =>{
//         expect(getValidate).toBeDefined();
//     });
//     it('Debería ser una función', () =>{
//         expect(typeof getValidate).toBe('object')
//     });
// });