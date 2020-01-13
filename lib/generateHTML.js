Manager = require("./Manager");

const generateHTML = (managerArray, internCards, engineerCards) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/73e2d51f51.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>My Rockstar Team</title>
  
  <body>
    <style>

      body {
        background-color: peru;

      }

      header {
        text-align: center;
        color: yellow;
        padding: 30px;
        background-color: darkgreen;
      }
      
      h2 {
        font-size: 50px;
      }


      h3 {
        font-weight: bold;
      }
  
      p {
        font-weight: bold;
      }
  
      .list-group-item {
        font-weight: bold;
        padding: 15px;
      }
  
      .card {
        margin: 15px;
      }
    </style>
    <header>
      <h2>MY TEAM</h2>
      <h2><i class="fas fa-users"></i></h2>
  
    </header>
  
    <br>
  
    <div class="container">
      <div class="wrapper">
        <div class="row row-cols-2 row-cols-md-3">
  
          <div class="card  border-dark text-white shadow-lg" style="max-width: 18rem;">
            <div class="card-header bg-warning">
              <h3>${managerArray[0].name}</h3>
              <h4><i class="fas fa-mug-hot"></i> ${managerArray[0].getRole()}</h4>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush text-dark shadow-sm">
                <li class="list-group-item list-group-item-warning">ID: ${
                  managerArray[0].id
                }</li>
                <li class="list-group-item list-group-item-warning">Email: <a href="mailto: ${
                  managerArray[0].email
                }"
                    target="_blank">${managerArray[0].email}</a></li>
                <li class="list-group-item list-group-item-warning">Office Number: ${
                  managerArray[0].officeNumber
                }</li>
              </ul>
  
            </div>
          </div>
           ${internCards}
          ${engineerCards}
          </div>
      </div>
    </div>
  
  
  </body>
  
  </html>
      `;
};

module.exports = generateHTML;
