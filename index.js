// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input




const questions = [
    {
           
        type: "input",
        message: "What is the Title of your Project?",
        name: "name",
    },
    {
        type: "input",
        message: "Please Describe your project.",
        name: "description"
 
    },
    {
        type: "input",
        message: "Please Provide any installation instructions you may have.",
        name: "install"
 
    },
    {
        type: "input",
        message: "Please provide instructions on how to use your project. Be descriptive!",
        name: "useage"
 
    },
    {
        type: "confirm",
        message: "Are there any contribution guidelines?",
        name: "guidelines" 
    },
    {
        type: "input",
        message: "What are those guidelines?",
        name: "haveGuidelines",
        when: ({ guidelines }) => guidelines,
        validate(value) {
         if (value.length) {
          return true;
         }
         return 'You must enter guidelines for your project!';
        }
    },
    {
        type: "input",
        message: "Please provide your testing instructions.",
        name: "testing"
 
    },
    {
        type: "list",
        message: "Which license would you like to use for your project?",
        choices: ["Apache 2.0", "MIT", "No License"],
        name: "license"
 
    },
    {
        type: "input",
        message: "Please provide an email address.",
        name: "email",
        validate(value) {
            if (validator.validate(value)) {
             return true;
            }
            return 'That was not a valid email address! Please try again.';
           }
    },
    {
        type: "input",
        message: "Please provide your GitHub Username.",
        name: "gitName"
 
    },

];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err ? console.log(err) : console.log("The File was written successfully!");
    });
  }

function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Generating file...")
        writeFile("./utils/README.md", generateMarkdown(response));
      });   
}

// TODO: Create a function to initialize app
function checkAnswer(val)
{
    if (val == "restart")
    {
        init();
    }
}


// Function call to initialize app
init();
