const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./models/Employee');
const Manager = require('./models/Manager');
const Engineer = require('./models/Engineer');
const Intern = require('./models/Intern');

const team = [];

const employeePrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: "What team member do you want to add?",
      name: 'employee',
      choices: ['manager', 'engineer', 'intern'],
    }
  ])
  .then((data) => {
    switch(data.employee) {
      case 'manager':
        managerPrompt();
        break;
      case 'engineer':
        engineerPrompt();
        break;
      case 'intern':
        internPrompt();
        break;
      default:
        console.log('Error! Team Member doesn\'t exist');
    }
  });
}

const managerPrompt = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Team Manager\'s Name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Email Address: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Office Number: ',
      name: 'officeNumber',
    },
  ])
  .then((data) => {
    console.log(data);
    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
    team.push(newManager);
    console.log(team);
    addPrompt();
  });
}

const engineerPrompt = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Engineer\'s Name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Email Address: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Github Link: ',
      name: 'github',
    },
  ])
  .then((data) => {
    console.log(data);
    const newEngineer = new Manager(data.name, data.id, data.email, data.github);
    team.push(newEngineer);
    console.log(team);
    addPrompt();
  });
}
const internPrompt = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Intern\'s Name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Email Address: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'School\'s name: ',
      name: 'school',
    },
  ])
  .then((data) => {
    console.log(data);
    const newIntern = new Intern(data.name, data.id, data.email, data.school);
    team.push(newIntern);
    console.log(team);
    addPrompt();
  });
}

const addPrompt = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Do you want to add another team member?',
      name: 'add',
      choices: ['Yes', 'No']
    },
  ])
  .then((data) => {
    switch(data.add) {
      case 'Yes':
        employeePrompt();
        break;
      case 'No':
        // Create HTML
        console.log("Create HTML");
        break;
      default:
        console.log("Error, option not found");
    }
  });
}
employeePrompt();