const inquirer = require('inquirer');
const fs = require('fs');

const employeePrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: "What team member do you want to add?",
      name: 'employeeChosen',
      choices: ['manager', 'engineer', 'intern'],
    }
  ])
  .then((data) => {
    console.log(data);
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
  });
}

employeePrompt();