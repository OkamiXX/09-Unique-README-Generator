// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project in a few sentences:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install? (Please provided as shown!!)",
        default: "npm i 'default'"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests? (Please provided as shown!!)",
        default: "npm test 'default'"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repo?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who were the contributors of this repo?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile("./dist/README.md", generateMarkdown({ ...res }));
        console.log("Done!!!");
    })
};

// Function call to initialize app
init();
