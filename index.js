const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

let employeeArr = []

const promptManager = (employee) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
            when: () => {
                if (!employee) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeName',
            message: `What is the employee's name?`,
            when: () => {
                if (employee) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email address?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            when: () => {
                if (!employee) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            when: () => {
                if (employee === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: "What is this intern's school?",
            when: () => {
                if (employee === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'additionalList',
            message: 'What other type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'None - finish building my team']
        }
    ])
    .then(managerData => {
        employeeArr.push(managerData);
        console.log(employeeArr);
        let {additionalList} = managerData;

        if (additionalList === 'None - finish building my team') {
            console.log(`we're done!`);
        } else {
            promptManager(additionalList);
        }
    })
};


promptManager()
    // .then(managerData => {
    //     employeeArr.push(managerData);
    //     console.log(employeeArr);
    //     let {additionalList} = managerData;

    //     if (additionalList === 'None - finish building my team') {
    //         console.log(`we're done!`);
    //     } else {
    //         promptManager(additionalList);
    //         console.log(employeeArr);
    //     }
        // const pageHTML = generatePage(teamData);
        // fs.writeFile('./dist/index.html', pageHTML, err => {
        //     if (err) throw new Error(err);
        // })
    // });

    