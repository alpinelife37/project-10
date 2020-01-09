const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const electron = require("electron");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managersName",
      message: "What is your managers name?"
    },
    {
      type: "input",
      name: "managersId",
      message: "What is your managers ID?"
    },
    {
      type: "input",
      name: "managersEmail",
      message: "What is your managers Email?"
    },
    {
      type: "input",
      name: "managersOfficeNumber",
      message: "What is your managers office number?"
    },
    {
      type: "list",
      name: "selection",
      message: "What type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members"
      ]
    }
  ]);
};
promptUser();
