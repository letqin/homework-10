// create manager card
const generateManager = function (manager) {
    return `
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
    </div>
    <div class="card-body mt-1">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.office}</p>
    </div>
    `;
};

// create engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div class="card-body mt-1">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">GitHub: <a href="https://www.github.com${engineer.github}">${engineer.github}</a></p>
    </div>
    `;
};

// create intern card
const generateIntern = function (engineer) {
    return `
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
    </div>
    <div class="card-body mt-1">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school}</p>
    </div>
    `;
};

// push information to page
generateHTML = (data) => {
    
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // call manager function
        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function
        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join("");

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

//generate HTML
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h2 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
    <main>
        <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <div class="col-3 mt-3">
                <div class="card h-100">
                <!--Team Cards--->
                ${employeeCards}
                </div>
            </div>
        </div>
    </div>
    </main> 
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
    `
}

module.exports = generateHTML