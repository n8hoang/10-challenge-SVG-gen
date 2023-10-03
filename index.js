const fs = require('fs');
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

// inquirer.prompt(questions).then(data => {
