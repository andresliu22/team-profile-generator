const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Team Manager Name: ',
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
