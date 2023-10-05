const fs = require('fs');
const SVG = require("./svg")
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or a hexadecimal number for the text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or a hexadecimal number for the shape:',
    }
];

const { Circle, Triangle, Square } = require('./shapes');

inquirer.prompt(questions).then(data => {
    let shape;
    const centerX = 150;
    const centerY = 100;

    switch (data.shape) {
        case 'circle':
            shape = new Circle();
            shape.setColor(data.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle();
            shape.setColor(data.shapeColor);
            break;
        case 'square':
            shape = new Square();
            shape.setColor(data.shapeColor);
            break;
    }

    const svg = new SVG();
    if (shape) svg.setShape(shape);
    svg.setText(data.text, data.textColor);

    fs.writeFileSync('logo.svg', svg.render());
    console.log("Generated logo.svg");
});
