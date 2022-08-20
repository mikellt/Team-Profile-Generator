const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateHTML");

const managersCard = [];
const engineersCard = [];
const internsCard = [];



//ask about async and await
async function managerEntry() {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "Manager Entry - Name:",
            name: "managerName",
        },
        {
            type: "input",
            message: "Manager Entry - Employee ID:",
            name: "managerId",
        },
        {
            type: "input",
            message: "Manager Entry - Email address:",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "Manager Entry - Office number:",
            name: "managerPhone",
        }
    ])
    .then((answers)=>{
        console.log(answers, "Entry saved");
        employeeEntry()
    })
};


function engineerEntry() {
    inquirer.prompt([
        {
            type: "input",
            message: "Engineer entry - Name:",
            name: "engineerName",
        },
        {
            type: "input",
            message: "Engineer entry - Employee ID:",
            name: "engineerId",
        },
        {
            type: "input",
            message: "Engineer entry - Email Address:",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "Engineer entry - GitHub Username:",
            name: "engineerGitHub",
        }
    ])
    .then((answers)=>{
        console.log(answers, "Entry saved")
        employeeEntry()
    })

}

function internEntry() {
    inquirer.prompt([
        {
            type: "input",
            message: "intern entry - Name:",
            name: "internName",
        },
        {
            type: "input",
            message: "intern entry - Employee ID:",
            name: "internId",
        },
        {
            type: "input",
            message: "intern entry - Email Address:",
            name: "internEmail",
        },
        {
            type: "input",
            message: "intern entry - school:",
            name: "internSchool",
        }
    ])
    .then((answers)=>{
        console.log(answers)
        employeeEntry()
    })
}

function employeeEntry(){
    inquirer.prompt([
        {
        type: "list",
        message: "Employee Entry: ",
        name: "employeeEntry",
        choices:
            [{
                name: "Engineer",
                value: "Engineer"
            },
            {
                name: "Intern",
                value: "Intern"
            },
            {
                name: "None, finish",
                value: "None, finish"
            }]
        }
    ])
    .then((answers)=> {
        if(answers.employeeEntry === "Engineer"){
            engineerEntry()
        } else if (answers.employeeEntry === "Intern"){
            internEntry()
        } else {
            const htmlCreate = generateMarkdown(answers)
            fs.writeFile("./teamFile/team.html", htmlCreate, (err) => err ? console.error(err) : console.log("success"))
        }    
    })
}

managerEntry()

// require inquirer

// Create an empty array list to store employee object

// gather Manager data
    // inquirer.prompt()
    // THEN build a manager object

    // Gather Engineer data
    // inquirer.prompt()
    // Then build an Engineer object
    
    // Gather Intern data
    // inquirer.prompt()
    // Then build an Intern object
    
    // ask which team to add or done
    // inquirer.prompt()
    // Then deciding which function the call
    
    // Generate the HTML and write it to a file