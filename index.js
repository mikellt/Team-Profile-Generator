const inquirer = require("inquirer");
const fs = require('fs');

async function managerEntry() {
    const answers = await inquirer
    .prompt([
        {
            type:"confirm",
            message:"Manager Entry?",
            value: "Manager",
            name:"manager"
        },
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
        console.log(answers, "Entries saved");
        employeeEntry()
    })
};

function employeeEntry(){
    inquirer.prompt([
        {
        type: "list",
        message: "Employee Entry - Select role",
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
                name: "done",
                value: "finish building my team"
            }]
        }
    ])

    .then((answers)=> {
    if(answers.employeeEntry === "Engineer"){
        engineerEntry();
    } else if (answers.employeeEntry === "Intern"){
        internEntry();
    } else console.log("Thank you, submission success")
    })
}

function engineerEntry() {
    inquirer.prompt([
        {
            type:"confirm",
            message:"Engineer Entry?",
            value: "Engineer",
            name:"engineer"
        },
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
        },
        {
            type: "list",
            message: "Enter another employee?",
            name: "anotherEntry",
            choices: [
                {
                    name: "yes",
                    value: "Yes"
                },
                {
                    name: "no",
                    value: "No"
                }
            ]
        }
    ])
    .then((answers)=>{
        console.log(answers)
        if(answers.anotherEntry === "Yes"){
            employeeEntry();
        }else {
            console.log("Thank you, submission success")
        }
    })
}

function internEntry() {
    inquirer.prompt([
        {
            type:"default",
            message:"Intern Entry?",
            default: "Intern",
            name:"intern"
        },
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
        },
        {
            type: "list",
            message: "Enter another employee?",
            name: "anotherEntry",
            choices: [
                {
                    name: "yes",
                    value: "Yes"
                },
                {
                    name: "no",
                    value: "No"
                }
            ]
        }
    ])
    .then((answers)=>{
        console.log(answers)
        if(answers.anotherEntry === "Yes"){
            employeeEntry();
        }else console.log("Thank you, submission success")
    })
}


managerEntry()