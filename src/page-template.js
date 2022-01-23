module.exports = templateData => {

    // destructure properties from templateData 
    const {managerName} = templateData;

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
        <div>
            <h2>${managerName}</h2>
            <h3>Manager</h3>
            <div>
                <p>ID: 1</p>
                <p>Email: jared@fakemail.com</p>
                <p>Office number: 1</p>
            </div>
        </div>
        <div>
            <h2>Alec</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: 2</p>
                <p>Email: alec@fakemail.com</p>
                <p>GitHib: ibealec</p>
            </div>
        </div>
    </main>
</body>
</html>
    `
}