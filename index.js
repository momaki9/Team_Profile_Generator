const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path")

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateSite = require('./src/generateHTML');

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team_profile.html")

const teamMembers = [];

function startingQuestions() {
  inquirer.prompt([
        {
          type: 'input',
          name: 'managername',
          message: "Please enter your name. ",
        },
        {
          type: 'input',
          name: 'managerid',
          message: 'Please enter your ID#.',
        },
        {
          type: 'input',
          name: 'manageremail',
          message: 'Please enter your email address.',
        },
        {
          type: 'input',
          name: 'manageroffice',
          message: 'Please enter your office number.',
        },
      ])
    .then(answers => {
      const manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.manageroffice);
      teamMembers.push(manager);

      continueQuestions();
    })
    
}



function engQuestions() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engname',
      message: "Please enter the engineer's name. ",
    },
    {
      type: 'input',
      name: 'engid',
      message: 'Please enter the engineer ID#.',
    },
    {
      type: 'input',
      name: 'engemail',
      message: 'Please enter the engineer email address.',
    },
    {
        type: 'input',
        name: 'enggithub',
        message: 'Please enter the engineer GitHub.',
      },
      ])
      .then(answers => {
        // console.log(answers)
        const engineer = new Engineer(answers.engname, answers.engid, answers.engemail, answers.enggithub);
        teamMembers.push(engineer);
        continueQuestions();
      })
}

function intQuestions() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'intname',
      message: "Please enter the intern's name. ",
    },
    {
      type: 'input',
      name: 'intid',
      message: 'Please enter the intern ID#.',
    },
    {
      type: 'input',
      name: 'intemail',
      message: 'Please enter the intern email address.',
    },
    {
        type: 'input',
        name: 'intschool',
        message: 'Please enter the intern school.',
      },
      ])
      .then(answers => {
        const intern = new Intern(answers.intname, answers.intid, answers.intemail, answers.intschool);
        teamMembers.push(intern);
        continueQuestions();
      })
}

function continueQuestions() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do next?',
      choices: ["Add an Engineer", "Add an Intern", "Exit -- My team is done!"]
    },
      
  ])
  .then(answers => {
    // console.log(answers.options)  
    if (answers.options === "Add an Engineer") {
      engQuestions();
    }
    if (answers.options === "Add an Intern") {
      intQuestions();
    }
    if (answers.options === "Exit -- My team is done!") {
      exitApp();
    }  

  })

}

function exitApp() {
 
  fs.writeFileSync(outputPath, generateSite(teamMembers), (err) =>
      err ? console.log(err) : console.log("Successfully created your team's webpage!")
    );
}

startingQuestions();