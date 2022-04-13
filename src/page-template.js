// Create Manager
const generateManager = managerData => {
    return `
        <section>
            <h2>${managerData.name}</h2>
            <h3>Manager</h3>
            <ul>
                <li>ID: ${managerData.id}</li>
                <li>Email: ${managerData.email}</li>
                <li>Office #: ${managerData.officeNumber}</li>
            </ul>
        </section>
    `
}

// Create Engineers
const generateEngineers = engineerData => {
    for (let i = 0; i < engineerData.length; i++) {
        return `
            <section>
                <h2>${engineerData[i].name}</h2>
                <h3>Engineer</h3>
                <ul>
                    <li>ID: ${engineerData[i].id}</li>
                    <li>Email: ${engineerData[i].email}</li>
                    <li>GitHub: ${engineerData[i].github}</li>
                </ul>
            </section>
        `
    }
}

// Create Interns
const generateInterns = internData => {
    for (let i = 0; i < internData.length; i++) {
        return `
        <section>
            <h2>${internData[i].name}</h2>
            <h3>Intern</h3>
            <ul>
                <li>ID: ${internData[i].id}</li>
                <li>Email: ${internData[i].email}</li>
                <li>School: ${internData[i].school}</li>
            </ul>
        </section>
        `
    }
}



// Generate Page

function generatePage(employeeArr) {
    let manager = employeeArr[0];
    let engineers = [];
    engineers = employeeArr.filter(employee => employee.github);
    let interns = [];
    interns = employeeArr.filter(employee => employee.school);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
            </div>
        </main>
    </body>
    </html>
        `;
}




module.exports = generatePage;



// const destructuredArr = []

// for (i = 0; i < employeeData.length; i++) {
//     if ("Manager") {
//         manager.push
//     }
// }


    


// }
// // destructure(0);

// // <div>
// {/* <h2>${managerName}</h2>
// <h3>Manager</h3>
// <div>
//     <p>ID: 1</p>
//     <p>Email: jared@fakemail.com</p>
//     <p>Office number: 1</p>
// </div>
// </div>
// <div>
// <h2>Alec</h2>
// <h3>Engineer</h3>
// <div>
//     <p>ID: 2</p>
//     <p>Email: alec@fakemail.com</p>
//     <p>GitHib: ibealec</p>
// </div> */}
