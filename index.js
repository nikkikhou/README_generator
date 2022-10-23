// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("welcome to the readme generator");
const avaliableLicenses = [
  "MIT",
  "GPLv2",
  "Apache",
  "GPLv3",
  "BSD 3-clause",
  "Unlicense",
  "BSD 2-clause",
  "LGPLv3",
  "AGPLv3",
  "None",
];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how to install your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Describe requirements to contribute to project",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe what is required to test your project",
  },
  {
    type: "list",
    name: "license",
    message: "What license should your project use?",
    default: "MIT",
    choices: avaliableLicenses,
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("before")
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("readme.md", 'test123');
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
