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
        type: "input",
        name: "installation",
        message: "What is the installation process to get the app running?"
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
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0']
    }
    ,
    {
        type: "input",
        name: "contributing",
        messgae: "Who helped in this project? (if none, leave blank)",
        default: 'Solo Project'
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
        name: "github",
        message: "What is your GitHub username? (required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    }
    ,
    {
    type: "input",
    name: "email",
    message: "What is your Email? (required)",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter your Email");
            return false;
        }
    }
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
