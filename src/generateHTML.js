// defining the functions that will build the html page based on user input
const generateTeam = (team) => {
    //definining an empty html array to be filled based on team members
    const html = [];
    const generateManager = (manager) => {
        //html code corresponding to the manager object created
        const managerDiv = `
        <div class="tile is-parent">
            <div class="tile is-child box has-background-link-light">
                <h2 class="title"> ${manager.getName()} </h2>
                <h3 class="subtitle"><i class="fa-solid fa-mug-saucer"></i> ${manager.getRole()} </h3>
                <ul class="box">
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Employee ID: ${manager.getId()} </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()} </a> </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
            </div>
        </div>
        `;
        //addes the manager html into the html array
        html.push(managerDiv);
    };

    const generateEngineer = (engineer) => {
        //html code corresponding to the engineer object created
        const engineerDiv = `
        <div class="tile is-parent">
            <div class="tile is-child box has-background-link-light">
                <h2 class="title"> ${engineer.getName()} </h2>
                <h3 class="subtitle"><i class="fa-solid fa-code"></i> ${engineer.getRole()} </h3>
                <ul class="box">
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Employee ID: ${engineer.getId()} </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a> </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank"> ${engineer.getGitHub()} </a> </li>
                </ul>
            </div>
        </div>
        `;
        //addes the engineer html into the html array
        html.push(engineerDiv);
    };

 
    const generateIntern = (intern) => {
        //html code corresponding to the intern object created
        const internDiv = `
        <div class="tile is-parent">
            <div class="tile is-child box has-background-link-light">
                <h2 class="title"> ${intern.getName()} </h2>
                <h3 class="subtitle"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()} </h3>
                <ul class="box">
                    <li class="box has-background-grey-lighter has-text-black subtitle"> ID: ${intern.getId()} </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()} </a> </li>
                    <li class="box has-background-grey-lighter has-text-black subtitle"> School: ${intern.getSchool()} </li>
                </ul>
            </div>
        </div>
        `;
        //addes the intern html into the html array
        html.push(internDiv);
    };

    // setting up a for loop to create html sections based on the number of employee objects created
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    //Joins the html sections for the different employees on the team
    return html.join("");
};

// exports the full html content including the html generated above
module.exports = (team) => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Software Engineering Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
  </head>
  <body>
      <header class="hero is-info">
          <div class="hero-body">
            <p class="title">My Team</p>
          </div>
      </header>
      <main>
          <div class="tile is-ancestor">
              ${generateTeam(team)}
          </div>
      </main>
      <script src="https://kit.fontawesome.com/e46b93902c.js" crossorigin="anonymous"></script>  
  </body>
  </html>
  `;
};