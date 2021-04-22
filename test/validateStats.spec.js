const { italic } = require('colors')
const validateStatusLink = require('../index.js')
const getValidate = require('../index.js')
const getStats = require('../index.js')
const whatItIs = require('../index.js')
const switchURLs = require ('../index.js')

describe('funcion validateStatusLink', () => {
    it('Saber si es constante', () => {
        expect(validateStatusLink).toBeDefined();
    });
    it('Debería ser una función', () =>{
        expect(typeof validateStatusLink).toBe('object');
    });
});

describe('funcion validate', () =>{
    it('Debería ser una constante', () =>{
        expect(getValidate).toBeDefined();
    });
    it('Debería ser una función', () =>{
        expect(typeof getValidate).toBe('object')
    });
});

describe('funcion stats', () =>{
    it('Debería ser una constante', () =>{
        expect(getStats).toBeDefined();
    });
    it('Debería ser una función', () =>{
        expect(typeof getStats).toBe('object')
    });
});

describe('funcion whatItIs', () =>{
    it('Debería ser una constante', () =>{
        expect(whatItIs).toBeDefined();
    });
    it('Debería ser un objeto', () =>{
        expect(typeof whatItIs).toBe('object')
    });
});

describe('funcion switchURLs', () =>{
    it('Debería ser una constante', () =>{
        expect(switchURLs).toBeDefined();
    });
        it('Debería ser un objeto', () =>{
            expect(typeof switchURLs).toBe('object')
    });
});


