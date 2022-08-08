const inquirer = require("inquirer");

// async/await

 async function whatDoYouWantToDo() {
    const answers = await inquirer.prompt([
    {
        type: "input",
        message: "what did you eat for breakfast?",
        name: "breakfast",
    },
    {
        type: "list",
        message: "What meal do you like?",
        name: "meal",
        choices: [
            {
                name: "Morning",
                value: "B"
            },
            {
                name: "lunch",
                value: "L"
            },
            {
                name: "dinner",
                value: "D"
            }]
    }

    ])
    // async/await commented out .then
    // .then((answers)=>{
    if(answers.breakfast === "Breakfast"){
        howDoYouWantToDo();
        }
    // });
}

function howDoYouWantToDo() {
    inquirer.prompt([
        {
            type: "input",
            message: "what did you eat for breakfast?",
            name: "breakfast",
        },
        {
            type: "list",
            message: "What meal do you like?",
            name: "meal",
            choices: [
                {
                    name: "breakfast",
                    value: "B"
                },
                {
                    name: "lunch",
                    value: "L"
                },
                {
                    name: "dinner",
                    value: "D"
                }]
        }

    ])
    .then((answers)=>{
        console.log(answers);
        //call back to starter question
        whatDoYouWantToDo()
    });
}

function whereDoYouWantToDo() {
    inquirer.prompt([
        {
            type: "input",
            message: "what did you eat for breakfast?",
            name: "breakfast",
        },
        {
            type: "list",
            message: "What meal do you like?",
            name: "meal",
            choices: [
                {
                    name: "breakfast",
                    value: "B"
                },
                {
                    name: "lunch",
                    value: "L"
                },
                {
                    name: "dinner",
                    value: "D"
                }]
        }

    ])
    .then((answers)=>{
        console.log(answers);
    });
}

whatDoYouWantToDo()