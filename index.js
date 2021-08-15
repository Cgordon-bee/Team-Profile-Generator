
const inquirer = require('inquirer');
const util =require("util");

//fs needed to generate html
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);
const generatedhtmlFilePath ="./"

//inport employee classes
const manager =require("./Team lib/manager");
const engineer =require("./Team lib/engineer");
const employee =require("./Team lib/employee ");
const intern = require("./Team lib/Intern");
const { error } = require('console');


console.log(manager.getName());
console.log(manager.getId());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.getOfficerNumber());

// Initial Prompt
inquirer
.prompt(
[
    { 
        name: "ManagerName",
        type: "imput",
        message:"enter team manager's name",
    },

    { 
        name: "ManagerID",
        type: "imput",
        message:"Enter Team manager's employee ID",
    },

    { 
        name: "ManagerEmail",
        type: "imput",
        message:"enter team manager's Email",
    },
    { 
        name: "ManagerOfficeNumber",
        type: "imput",
        message:"enter team manager Officer Number",
    },

     {  name: "additionalEmployees",
        type: "list",
        message: "select team member to add",
        choices: "engineer, intern",


}
])

/* Resolve correct pathway to folder*/
.then(answers => {
fs.writeFileSync (generatedhtmlFilePath,"");
})

// if error add options
.catch(error => {
if(error.isTtyError) {
}
else {


});

// function added for prompt to restart if additional team members needed//
function additionalEmployees()
{
    inquirer
    .prompt(
    [
        { 
            name: "ManagerName",
            type: "imput",
            message:"enter team manager's name",
        },
    
        { 
            name: "ManagerID",
            type: "imput",
            message:"Enter Team manager's employee ID",
        },
    
        { 
            name: "ManagerEmail",
            type: "imput",
            message:"enter team manager's Email",
        },
        { 
            name: "ManagerOfficeNumber",
            type: "imput",
            message:"enter team manager Officer Number",
        },
    
         {  name: "additionalEmployees",
            type: "list",
            message: "select team member to add",
            choices: "engineer, intern",
    
    
    }
    ])
    
    /* Resolve correct pathway to folder*/
    .then(answers => {
    fs.writeFileSync (generatedhtmlFilePath,"");
    })
    
    // if error add options
    .catch(error => {
    if(error.isTtyError) {
    }
    else {
    
    
    });




}