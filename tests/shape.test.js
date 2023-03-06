const {Circle, Square, Triangle} = require('../lib/shapes');


//Circle Test
describe('Circle', () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

  // Make the square and triangle test match

//Square Test
// describe('Is a Square a Square', () => {
//     it('Should throw an error if square !=== square', () => {
//         const square =  new Square();
//         const err = new Error('I do not know what shape this is but it is not a square')
//         expect(square).toEqual({
//             shape: 'Square'
//         })
//     })
// });

// //Triangle Test
// describe('Is a Triangle a Triangle', () => {
//     it('Should throw an error if triangle !=== triangle', () => {
//         const triangle =  new Triangle();
//         const err = new Error('I do not know what shape this is but it is not a triangle')
//         expect(triangle).toEqual({
//             shape: 'Triangle'
//         })
//     })
// });