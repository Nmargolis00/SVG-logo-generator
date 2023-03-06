const {Circle, Square, Triangle} = require('../lib/shapes');


//Circle Test
describe('Circle', () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="green" />`;
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        console.log(actualSvg, expectedSvg);
        expect(actualSvg).toEqual(expectedSvg);
    });
});



//Square Test
