const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name? '
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