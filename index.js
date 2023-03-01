// GIVEN a command-line application that accepts user input
const { Shape, Circle, Pentagon, Triangle } = require('./library/');
const fs = require('fs');
const inquirer = require('inquirer');
const colorName = require('color-name');
const color = require('color');
const shapes = require('shapes');
const path = require('path');
const generateLogo = require('./lib/generateLogo');


// WHEN I am prompted for text to define 3 characters, text color, shape, and shape color
const questions = [
    {
        type: input,
        name: characters,
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
        type: input,
        name: textColor,
        message: 'Please Enter a color name or hexidecimal number'
    },
     // How do I make sure it is a color/propeerly linked?
    {
        type: input,
        name: shape,
        message: 'What shape would you like?',
        choices: [
            {name: 'Circle', value: 'Circle'}, 
            {name: 'Pentagon', value: 'Pentagon'}, 
            {name: 'Triangle', value: 'Triangle'}, 
        ],
    },
    {
        type: input,
        name: shapeColor,
        message: 'Please Enter a your desired color for the shape'
    },
// How do I make sure it is a color/propeerly linked?
]


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

function createLogoFile(filename, data) {
    return fs.writeFileSync(path.join(filename),data)
}

function init() {
    inquirer.prompt(questions).then((userResponse)=>{
        console.log("Created a Logo");
        createLogoFile('.svg', generateLogo({...userResponse}))
    })
}

init();

// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered