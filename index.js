// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input


// 

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

const questions = [
    {
           
        type: "input",
        message: "What is the Title of your Project?",
        name: "name"
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
        name: "Description"
 
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
         return 'You ';
        }
    },

];
function init() {
    inquirer.prompt([
       
        {
            type: "checkbox",
            message: "How many sections would you like in your table of centents?",
            choices: ["1", "2", "3", "4", "5", "6"],
            name: "Contents"
    
        }
    ]).then( response => {
        let sections = parseInt(response.Contents[0])
        

        generateSections(sections);       
           
    });
    
    
  
}

function generateSections(sections) {
    
    let sectionTitles = [];

    for(let i = sections; i > 0; i--)
    {   
        let theName = `section${i}`
        prompt.next([
        {
            type: "input",
            message: "Title of Section " + i,
            name: theName
        }])
    }

    inquirer.prompt([
    
    ]).then(response => {
        sectionTitles.push(response.theName);
    });
}

// Function call to initialize app
init();
