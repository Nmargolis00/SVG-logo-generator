// GIVEN a command-line application that accepts user input
const {Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const SVG = require('./lib/svg')
const {writeFile} = require('fs/promises')

// WHEN I am prompted for text to define 3 characters, text color, shape, and shape color

 
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'characters',
            message: 'Please Enter up to 3 characters',
            validate: function(input){
                if(input.length > 3){
                    return "Please do not enter more than 3 characters"
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please Enter a color name or hexidecimal number'
        },
         // How do I make sure it is a color/propeerly linked?
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: [
                {name: 'Circle', value: 'Circle'}, 
                {name: 'Square', value: 'Square'}, 
                {name: 'Triangle', value: 'Triangle'}, 
            ],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please Enter a your desired color for the shape'
        },
    // How do I make sure it is a color/propeerly linked?
    ]).then(({characters, textColor, shape, shapeColor})=>{
        let shapeType;
        switch (shape) {
            case 'circle':
                shapeType = new Circle()
                break;

            case 'square':
                shapeType = new Square()
                break;

            default:
            case 'triangle':
                shapeType = new Triangle()
                break;
        }
        shapeType.setColor(shapeColor);
        const svg = new SVG();
        svg.setTextColor(characters, textColor);
        svg.setShape(shapeType);
        return writeFile('logo.svg', svg.render())
    }).then(()=>{
        console.log('Made you a logo, you better like it');
    }).catch((error)=>{
        console.log(error);
    })
}




init();

// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered