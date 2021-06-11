// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            // title of project
        },
        {
            // description of what, why, how
        },
        {
            //installation steps
        },
        {
            // usage w/ screenshots
        },
        {
            // credits of collaborators, third-party assets, tutorials used
        },
        {
            // license for others to know whay they can and cannot do with your project
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
