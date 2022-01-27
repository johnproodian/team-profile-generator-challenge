// initialize prompts
    // prompt manager --> 

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name? '
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?'
        }, 
        {
            // type: 
        }
    ])
};

promptManager()
    .then(teamData => {
        const pageHTML = generatePage(teamData);
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw new Error(err);
        })
    });

    