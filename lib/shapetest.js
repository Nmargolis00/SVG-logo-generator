const {Circle, Square, Triangle} = require('./shapes');
const index = require('index');


//Circle Test
describe('Is a Circle a Circle', () => {
    it('Should throw an error if circle !=== circle', () => {
        const circle =  new Circle();
        const err = new Error('I do not know what shape this is but it is not a circle')
        expect(circle).toEqual({
            shape: 'Circle'
        })
    })
});

//Square Test
describe('Is a Square a Square', () => {
    it('Should throw an error if square !=== square', () => {
        const square =  new Square();
        const err = new Error('I do not know what shape this is but it is not a square')
        expect(square).toEqual({
            shape: 'Square'
        })
    })
});

//Triangle Test
describe('Is a Triangle a Triangle', () => {
    it('Should throw an error if triangle !=== triangle', () => {
        const triangle =  new Triangle();
        const err = new Error('I do not know what shape this is but it is not a triangle')
        expect(triangle).toEqual({
            shape: 'Triangle'
        })
    })
});