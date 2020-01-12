const generateHTML = require("./generateHTML");
const fs = require("fs");

const create = (managerArray, internArray, engineerArray) => {
  const internCards = internArray.map(employee => {
    return `<div class="card border-dark text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header border-success bg-success">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-graduation-cap"></i> Intern </h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item list-group-item-warning">ID: ${employee.id}</li>
          <li class="list-group-item list-group-item-warning">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
          <li class="list-group-item list-group-item-warning">School: ${employee.school}</li>
        </ul>

      </div>
    </div>`;
  });

  const engineerCards = engineerArray.map(employee => {
    return `<div class="card border-dark text-white shadow-lg" style="max-width: 18rem;">
      <div class="card-header bg-dark">
        <h3>${employee.name}</h3>
        <h4><i class="fas fa-glasses"></i> Engineer </h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush text-dark shadow-sm">
          <li class="list-group-item list-group-item-warning">ID: ${employee.id}</li>
          <li class="list-group-item list-group-item-warning">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
          <li class="list-group-item list-group-item-warning">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>          </ul>

      </div>
    </div>`;
  });

  html = generateHTML(managerArray, engineerCards, internCards);

  fs.writeFile("./output/team.html", html, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

module.exports = create;
