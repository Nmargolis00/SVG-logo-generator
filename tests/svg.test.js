const SVG = require('../lib/svg');

test('Can it render an SVG', () => {
    const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const newSVG = new SVG();
    expect(newSVG.render()).toEqual(svg);
}) 

// test('Can it write text', () => {
//     const svgText = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text</svg>'
//     const newSVG = new SVG ();
//     newSVG.setTextColor('A', "white")
//     expect(newSVG.render()).toEqual(svgText);
// })
