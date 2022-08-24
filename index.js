const inquirer = require("inquirer");
const fs = require('fs');
const employeeType = require("./utils/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let managers = [];
let engineers = [];
let interns = [];
let myTeam = [];


function managerEntry() {
    inquirer
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
        const newManager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerPhone);
        managers.push(newManager);
        console.log("Entry saved");
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
        const newEngineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGitHub);
        engineers.push(newEngineer);
        console.log("Entry saved")
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
        const newIntern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
        interns.push(newIntern);
        console.log("Entry Saved")
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
            myTeam = [...managers,...engineers,...interns]
            console.log(myTeam)
            const htmlCreate = employeeType(myTeam)
            fs.writeFile("./dist/team.html", htmlCreate, (err) => err ? console.error(err) : console.log("success"))
        }    
    })
}

managerEntry()

