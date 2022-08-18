const inquirer = require("inquirer");
const fs = require('fs');


// async/await


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
        console.log(answers);
        //call back to starter question
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
            [
                {
                name: "engineer",
                value: "Engineer"
                },
                {
                name: "intern",
                value: "Intern"
                },
                {
                name: "done",
                value: "finish building my team"
                }
            ]
        }
    ])
    // async/await commented out .then
    // .then((answers)=>{
    if(answers.employeeEntry === "Engineer"){
        engineerEntry();
    } else if (answers.employeeEntry === "Intern"){
        internEntry();
    } else console.log("Thank you")
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
        }else ("Thank you")
    })
}


managerEntry()