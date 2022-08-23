

const generateHTML = (data) => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyTeam</title>
    <link rel="stylesheet" href="./utils/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <h1 id="header">My Team</h1>
    <section>${team}</section>
    </body>
    </html>
    `
}
//bootstrap

const generateTeam = (team) => {
    const html= [];

    const generateManager = (manager) => {
    // need to return HTML template literal with manager data
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.managerName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.managerId}</li>
                    <li class="list-group-item">${manager.managerEmail}</li>
                    <li class="list-group-item">${manager.managerPhone}</li>
                </ul>
            </div>
        </div>
        `;
        html.push(managerHtml);

    }

const generateEngineer = (engineer) => {
    // need to return HTML template literal with manager date
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.engineerName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.engineerId}</li>
                <li class="list-group-item">${engineer.engineerEmail}</li>
                <li class="list-group-item">${engineer.engineerGitHub}</li>
            </ul>
        </div>
    </div>
    `;
    html.push(engineerHtml);
}
const generateIntern = (intern) => {
    // need to return HTML template literal with manager date
    let internHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.internName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.internId}</li>
                <li class="list-group-item">${intern.internEmail}</li>
                <li class="list-group-item">${intern.internSchool}</li>
            </ul>
        </div>
    </div>
    `;
    html.push(internHtml);
}

const employeeType = (team) =>{
    // filter for each employee type
    // for each employee type send all employee through generate employee type function
    // save output html cards to an array. this array will go to data portion of generateHTML

}
}


module.exports = employeeType;