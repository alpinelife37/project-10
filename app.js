const inquirer = require("inquirer");
const inquirerRecursive = require("inquirer-recursive");
const fs = require("fs");
const util = require("util");
const electron = require("electron");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

inquirer.registerPrompt("recursive", require("inquirer-recursive"));

promptManager = function() {
  inquirer
    .prompt([
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
      }
    ])
    .then(function() {
      askForEmployee();
    });
};

askForEmployee = function() {
  inquirer
    .prompt([
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
    ])
    .then(val => {
      if (val.selection === "Engineer") {
        engineerQuestions();
      } else if (val.selection === "Intern") {
        internQuestions();
      } else if (
        val.selection === "I don't want to add any more team members"
      ) {
        generatehtml();
      }
    });
};

internQuestions = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internsName",
        message: "What is your intern's name?"
      },
      {
        type: "input",
        name: "internsEmail",
        message: "What is your intern's email?"
      },
      {
        type: "input",
        name: "internsSchool",
        message: "What is your intern's school?"
      }
    ])
    .then(internAnswers => {
      askForEmployee();
    });
};

engineerQuestions = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineersName",
        message: "What is your engineer's name?"
      },
      {
        type: "input",
        name: "engineersId",
        message: "What is your engineers ID?"
      },
      {
        type: "input",
        name: "engineersGithub",
        message: "What is your engineers Github?"
      }
    ])
    .then(enginnerAnswers => {
      askForEmployee();
    });
};

promptManager();
