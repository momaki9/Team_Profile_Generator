//packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path")
//files needed
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generateHTML');
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team_profile.html")
//Starting with an empty array of team members to be modified from user input
const teamMembers = [];
//Starting prompt questions for the manager
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
      //saves the answers from the prompt as a manager object
      const manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.manageroffice);
      //addes the saved manager object into the team members array
      teamMembers.push(manager);
      //calls prompt questions to see what the user would like to do next
      continueQuestions();
    })
    
}

//prompt questions for an engineer on the team
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
        //saves the answers from the prompt as an engineer object
        const engineer = new Engineer(answers.engname, answers.engid, answers.engemail, answers.enggithub);
        //addes the saved engineer object into the team members array
        teamMembers.push(engineer);
        //calls prompt questions to see what the user would like to do next
        continueQuestions();
      })
}

//prompt questions for an intern on the team
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
        //saves the answers from the prompt as a new intern object
        const intern = new Intern(answers.intname, answers.intid, answers.intemail, answers.intschool);
        //addes the saved intern object into the team members array
        teamMembers.push(intern);
        //calls prompt questions to see what the user would like to do next
        continueQuestions();
      })
}

//prompt questions for what the user should do next in the app
function continueQuestions() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do next?',
      choices: ["Add an Engineer", "Add an Intern", "Exit -- My team is done!"]
    },
      
  ])
  //directs the user to questions if they would like to add more memmbers or if they are done building the team
  .then(answers => {
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

// function to generate the webpage when the user has finished with the prompt questions
function exitApp() {
 
  fs.writeFileSync(outputPath, generateSite(teamMembers), (err) =>
      err ? console.log(err) : console.log("Successfully created your team's webpage!")
    );
}
//calling the start questions when the app first runs
startingQuestions();