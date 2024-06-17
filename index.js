// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: "input",
        message: "What is the title of your README file?",
        name: "title",
        },
        {
        type: "input",
        message: "Provide a description of your project.",
        name: "description",
        },
        {
        type: "input",
        message: "Please provide installation info",
        name: "installation",    
        },
        {
        type: "input",
        message: "Provide details of usage.",
        name: "usage",    
        },
        {
        type: "input",
        message: "Any collaborators that you would like to give credit to?",
        name: "credits",    
        },
        {
        type: "list",
        message: "Licenses?",
        choices: ["MIT", "Apache","IBM","Mozilla", "Perl"],
        name: "license",    
        },
        {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribute",    
        },
        {
        type: "input",
        message: "Provide testing information.",
        name: "testing"    
        },
        {
        type: "input",    
        message: "What is your GitHub username?",
        name: "username",    
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email",
        },
        {
        type: "input",
        message: "Please provide your site URL.",
        name: "URL",    
        },
        {
        type: "confirm",
        message: "Would you like to add screenshots?",
        name: "screenshot",   
        }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log(`${fileName} has been generated successfully!`)
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error("Error occurred:", error);
        });
};

// Function call to initialize app
init();


