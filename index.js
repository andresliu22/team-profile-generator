// Import libraries
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Initialize empty arrays to store employees
const managers = [];
const engineers = [];
const interns = [];

// Employee prompt to answer what team member would be added
const employeePrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: "What team member do you want to add?",
      name: 'employee',
      choices: ['Manager', 'Engineer', 'Intern'],
    }
  ])
  .then((data) => {
    switch(data.employee) {
      case 'Manager':
        managerPrompt();
        break;
      case 'Engineer':
        engineerPrompt();
        break;
      case 'Intern':
        internPrompt();
        break;
      default:
        console.log('Error! Team Member doesn\'t exist');
    }
  });
}

// Manager Prompt to answer about the manager and push it to the corresponding array
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
    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
    managers.push(newManager);
    addPrompt();
  });
}

// Engineer Prompt to answer about the engineer and push it to the corresponding array
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
      message: 'Github: ',
      name: 'github',
    },
  ])
  .then((data) => {
    const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
    engineers.push(newEngineer);
    addPrompt();
  });
}

// Intern Prompt to answer about the intern and push it to the corresponding array
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
    const newIntern = new Intern(data.name, data.id, data.email, data.school);
    interns.push(newIntern);
    addPrompt();
  });
}

// Add Prompt to answer if user wants to continue adding team members
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
        generateHTML();
        break;
      default:
        console.log("Error, option not found");
    }
  });
}

// Generate HTML with given team members
const generateHTML = () => {

  let cards = ``;
  
  // Sort team members by id
  managers.sort((a, b) => a.id - b.id);
  engineers.sort((a, b) => a.id - b.id);
  interns.sort((a, b) => a.id - b.id);

  // Set all team members into an array called team
  let team = [...managers, ...engineers, ...interns];
  team.forEach(employee => cards += employee.setCard());

  // Set HTML File with team members
  const html = 

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/style.css">
    <title>Team Profile</title>
</head>
<body>
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-8 margin-auto">
                    <h1>My Team</h1>
                </div>
            </div>
        </div>
    </div>

    <main class="d-flex">
        <div class="main-div container">
            <div class="row" id="card-container">
              ${cards}
            </div>
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
</body>
</html>
`
  
  // Generate HTML File
  fs.writeFile('./dist/index.html', html, (error => {
    error ? console.log(error) : console.log("HTML Created");
  }))
}

// Initial prompt called given to the user
employeePrompt();