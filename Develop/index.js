const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const htmlTemplate = require("./src/htmlTemplate");

const inquirer = require("inquirer");
const fs = require("fs");

const fullTeam = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id number of the manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        },
    ])
    .then(managerPrompt => {
        const { name, id, email, office } = managerPrompt;
        const manager = new Manager(name, id, email, office);
        fullTeam.push(manager)
        console.log(manager)
    })
};

const newEmployee = () => {
    console.log("Add employees to the team.");

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose your employee's role.",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name."
        },
        {
            type: "input",
            name: "name",
            message: "What is the id number of the employee?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the employee's school.",
            when: (input) => input.role === "Intern"
        },
        {
            type: "input",
            name: "confirmnewEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmnewEmployee } = 
        employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        }
        fullTeam.push(employee);

        if (confirmnewEmployee) {
            return newEmployee(fullTeam);
        } else {
            return fullTeam;
        }
    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team profile has been generated and is in the dist folder in this repository.")
        }
    })
};

managerPrompt()
    .then(newEmployee)
    .then(fullTeam => {
        return htmlTemplate(fullTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
    