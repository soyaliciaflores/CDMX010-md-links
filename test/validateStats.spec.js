const { italic } = require('colors')
const validateStatusLink = require('../index.js')

describe('Obtener status de links', () => {
    it('Saber si es constante', () => {
        expect(validateStatusLink).toBeDefined();
    });
    it('Debería ser una función', () =>{
        expect(typeof validateStatusLink).toBe('object');
    });
});