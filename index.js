
const inquirer = require('inquirer');
const util =require("util");
const fs = require("fs");

//inport employee classes
const Manager =require("./lib/Manager");
const Engineer =require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { create } = require('domain');

var teamMembers= []

console.log("Welcome to your team generator app")



function Team() {
    function createManager(){
        inquirer
.prompt(
[
    { 
        type: "input",
        message:"enter team manager's name",
        name: "name",
    },

    { 
        type: "input",
        message:"Enter Team manager's employee ID",
        name:"id",
    },

    { 
        type: "input",
        message:"enter team manager's Email",
        name:"email",
    },
    { 
    
        type: "input",
        message:"enter team manager Officer Number",
        name:"officeNumber",
    },
   
    
])
.then(answers =>{
const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
teamMembers.push(manager)
createTeam()
})
    }
function createTeam() {
    inquirer.prompt([{
        type: "list",
        name:"membersChoice",
        message:"What type of team member would you like to add?",
        choice:[
            "Engineer",
            "Intern",
            "done",
        ]

    }


    ]

    ).then(answer =>{
        if (answer.membersChoice==="Engineer") {
            createEngineer()
            
        } else if (answer.membersChoice==="Intern") {
            createIntern()
            
        } else{
            buildTeam()
        }
    })
    

}
function createEngineer(){
    inquirer.
prompt(
    [
        { 
            type: "input",
            message:"enter team engineer's name",
            name: "name",
        },
    
        { 
            type: "input",
            message:"Enter engineer's employee ID",
            name:"id",
        },
    
        { 
            type: "input",
            message:"enter engineer's Email",
            name:"email",
        },
        { 
        
            type: "input",
            message:"enter engineer's github page",
            name:"githubDetails",
        },
        
    ]

).then(answers =>{
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.githubDetails)
    teamMembers.push(Engineer)
    createTeam()

})


}}

function createIntern() {


}

Team()