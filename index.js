// TODO: Include packages needed for this application
// I need fs and inquirer (npm) - Done

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Questions to add : Project Title, Description, Table of Contents, Installation, Usage, License, Contributin, Tests, and Questions
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project? (Required)",
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log("Please enter your Project Title!");
                return false;
            }
        }
    },{
        type: "input",
        name: "description",
        message: "Describe your project"
    },{
        // I might be able to have this add automatically depending on what they input on the other questions so ignore this one for now.
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to include a Table of Contents"
    },{
        type: "number",
        name: "installation",
        message: "How many steps are required to get the development environment running?"
    },{
        type: "confirm",
        name: "usage",
        message: "Would you like to include a picture of the project?"
    },{
        type: "list",
        name: "license",
        messgae: "What license would you like to connect to the project?",
        choices: ["ISC", "MIT", "GNU GPLv3"]
    },{
        // Not sure what I should put here!
        type: "confirm",
        name: "contributing",
        messgae: "Would you like to add A Code of Conduct for Open Source Communities?"
    },{
        type: "input",
        name: "tests",
        message: "This is a placeholder until I figure this out!"
    },{
        type: "input",
        name: "quesitons",
        message: "This needs multiple lines to add in GitHub profile and contact information"
    }
]
)}

// TODO: Create a function to write README file
// 
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();