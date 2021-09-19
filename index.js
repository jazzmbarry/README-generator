// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log("Please enter your Project Title!");
                return false;
            }
        }
    }
    ,
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    }
    ,
    {
        type: "number",
        name: "installation",
        message: "How many steps are required to get the development environment running?"
    }
    ,
    {
        type: "confirm",
        name: "usage",
        message: "Would you like to include a picture of the project?",
        when: pictureInsert => {
            if (true) {
                return ("(Your description of the picture)[Picture Pathing i.e ./images/this-picture.png]")
            }
        } 
    }
    ,
    {
        type: "list",
        name: "license",
        messgae: "What license would you like to connect to the project?",
        choices: ["ISC", "MIT", "GNU GPLv3"]
    }
    ,
    {
        // Not sure what I should put here!
        type: "confirm",
        name: "contributing",
        messgae: "Would you like to add A Code of Conduct for Open Source Communities?"
    }
    ,
    {
        type: "input",
        name: "tests",
        message: "This is a placeholder until I figure this out!"
    }
    ,
    {
        type: "input",
        name: "quesitons",
        message: "This needs multiple lines to add in GitHub profile and contact information"
    }
    ,
    {
        // I might be able to have this add automatically depending on what they input on the other questions so ignore this one for now.
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to include a Table of Contents"
    }
]
)
   
}

// TODO: Create a function to write README file
// 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , err => {
        if (err) {
          console.log(err)
          return
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        return generateMarkdown(data)})
    .then(pageREADME => {
        return writeToFile('./dist/README.md', pageREADME)
    })
    .catch(err => {
        console.log(err);
      })
    // writeToFile(data)
}

// Function call to initialize app
init();   
