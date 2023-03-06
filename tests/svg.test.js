const SVG = require('../lib/svg');

test('Can it render an SVG', () => {
    const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const newSVG = new SVG();
    expect(newSVG.render()).toEqual(svg);
}) 

