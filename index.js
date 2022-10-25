// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("welcome to the readme generator");


const avaliableLicenses = [
  {
    name: "MIT",
    short: "MIT",
    image: "https://img.shields.io/badge/License-MIT-yellow.svg",
    url: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Apache",
    short: "Apache",
    image: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    url: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "BSD 3-clause",
    short: "BSD 3-clause",
    image: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    url: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    name: "Unlicense",
    short: "Unlicense",
    image: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    url: "http://unlicense.org/",
  },
  {
    name: "IBM",
    short: "IBM",
    image: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
    url: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
  },
];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is the Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What your email?",
  },
  {
    type: "input",
    name: "title",
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
    default: "mit",
    choices: avaliableLicenses,
    filter(val) {
      const selectedLicense = avaliableLicenses.find(
        (license) => license.name === val
      );
      return selectedLicense;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("before");
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
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
