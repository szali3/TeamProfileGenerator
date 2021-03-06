//importing classes from lib folder
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

//importing inquirer and js from src folders
const generateHTML = require("./src/generateHTML");
const inquirer = require('inquirer');

//Array to store customer answers from inquirer
var ans = [];

//Questions array for Manager
quesManager = [
    {
        type: 'input',
        name: 'name',
        message: "What's your Team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your Team Manager's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your Team Manager's Email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's your Team Manager's office number?"
    },
    {
        type: 'list',
        name: 'choice',
        message: "Do you want to add Engineer/Intern or finish?",
        choices: ['Engineer','Intern','Finnish']
    }]

    //Questions array for Inter
quesIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What's your Interns name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your Interns's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your Interns's Email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What's your Interns's school?"
    },
    {
        type: 'list',
        name: 'choice',
        message: "Do you want to add Engineer/Intern or finish?",
        choices: ['Engineer','Intern','Finnish']
    }]

//Question array for Engineer
quesEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What's your Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your Engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your Engineer's Emai?l"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What's your Engineer's github account?"
    },
    {
        type: 'list',
        name: 'choice',
        message: "Do you want to add Engineer/Intern or finish?",
        choices: ['Engineer','Intern','Finnish']
    }]

// get input from customer using inquirer
getInput = (questions, choice) => {
    if (choice === 'Finnish') {
        console.log("HTML Created!!!")
    } else  {
        inquirer
        .prompt(questions)
        .then((answers) => {
            if (choice === 'Manager') {
                const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
                ans.push(manager)
            } else if (choice === 'Intern') {
                const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
                answers['role']='Intern';
                ans.push(intern)
            } else if (choice === 'Engineer') {
                const engineer = new Engineer(answers.name,answers.id,answers.email,answers.gitHub);
                answers['role']='Engineer';
                ans.push(engineer)
            }
            if (answers.choice === 'Intern'){
                getInput(quesIntern,answers.choice)
            } else if (answers.choice === 'Engineer'){
                getInput(quesEngineer,answers.choice)
            } else if (answers.choice ==='Finnish') {
                fs.writeFile('./dist/index.html',generateHTML(ans),function (err) {
                    if (err) throw err;
                });
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) throw err;
                });
                
            }
        })
    }
}

// initialize choice as Manager is always first choice
let choice = "Manager";

// start program
getInput(quesManager, choice);


