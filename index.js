// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeToFile = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project? (Required)',
            //validate: ''
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project: (Required)',
            //validate: ''
        },
        {
            type: 'input',
            name: 'process',
            message: 'What steps are required to install your project? (Required)',
            //validate: ''
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would a developer use this application?',

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
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
questions()
    .then