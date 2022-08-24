


const generateTeam = team => {
    const html= [];
    
    const generateManager = (manager) => {
    // need to return HTML template literal with manager data
    let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-body text-bg-danger">
                
                <h5 class="card-title text-bg-dark      text-center">${manager.name}</h5>
                
                <h6 class="card-subtitle text-bg-dark mb-3 text-center">Manager</h6>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id#: ${manager.id}</li>
                    <li class="list-group-item">Email: 
                        <span id="email">
                            <a href="mailto:${manager.email}">${manager.email}
                            </a>
                        </span></li>
                    <li class="list-group-item">Phone: ${manager.officeNumber}</li>
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
            <div class="card-body text-bg-primary">
                
                <h5 class="card-title text-bg-dark text-center">${engineer.name}</h5>
                
                <h6 class="card-subtitle text-bg-dark mb-3 text-center">Engineer</h6>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id#: ${engineer.id}</li>
                    <li class="list-group-item">Email: 
                    <span id="email">
                            <a href="mailto:${engineer.email}">${engineer.email}
                            </a>
                        </span></li>
                    <li class="list-group-item">GitHub Profile: 
                        <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}
                        </a></li>
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
            <div class="card-body text-bg-warning ">
                
                <h5 class="card-title text-bg-dark text-center">${intern.name}</h5>
                
                <h6 class="card-subtitle text-bg-dark mb-3 text-center">Intern</h6>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id#: ${intern.id}</li>
                    <li class="list-group-item">Email: 
                    <span id="email">
                            <a href="mailto:${intern.email}">${intern.email}
                            </a>
                        </span></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        html.push(internHtml);
    }
    
    for (let i=0; i<team.length; i++){
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        } if (team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        } if (team[i].getRole()=== "Intern"){
            generateIntern(team[i]);
        } 
    }
    
    return html.join('');
}

// module.exports = team => {
const employeeType = (team) => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyTeam</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <h1 id="header">My Team</h1>
    <main>${generateTeam(team)}</main>
    </body>
    </html>
    `
}


module.exports = employeeType;