const generateHTML = require("./generateHTML");
const fs = require("fs");

const create = (managerArray, internArray, engineerArray) => {
  const internCards = internArray.map(employee => {
    return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header bg-success">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-graduation-cap"></i> ${employee.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            employee.email
          }" target="_blank">${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>

      </div>
    </div>`;
  });

  const engineerCards = engineerArray.map(employee => {
    return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header bg-dark">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-glasses"></i> ${employee.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto: ${
            employee.email
          }" target="_blank">${employee.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${
            employee.github
          }" target="_blank">${employee.github}</a></li>          </ul>

      </div>
    </div>`;
  });

  html = generateHTML(managerArray, internCards, engineerCards);

  fs.writeFile("./output/team.html", html, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

module.exports = create;
