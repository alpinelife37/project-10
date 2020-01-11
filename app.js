const inquirer = require("inquirer");
const inquirerRecursive = require("inquirer-recursive");
const fs = require("fs");
const util = require("util");
const electron = require("electron");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

inquirer.registerPrompt("recursive", require("inquirer-recursive"));

promptManager = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managersName",
        message: "What is your managers first name?",
        validate: function(val) {
          return /^[a-zA-Z]+$/i.test(val) || "Must only be letters!";
        }
      },
      {
        type: "input",
        name: "managersId",
        message: "What is your managers" + this.name + "?",
        validate: function(val) {
          return (
            /^[0-9]*$/i.test(val) || "Must be a number/numbers between 0-9"
          );
        }
      },
      {
        type: "input",
        name: "managersEmail",
        message: "What is your managers Email?",
        validate: function(val) {
          return (
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
              val
            ) || "Must be an email address like john@aol.com!"
          );
        }
      },
      {
        type: "input",
        name: "managersOfficeNumber",
        message: "What is your managers office phone number?",
        validate: function(val) {
          return (
            /^[2-9]\d{2}-\d{3}-\d{4}$/i.test(val) ||
            "Must be a phone number in this format 123-456-7890!"
          );
        }
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
        message: "What is your intern's  first name?",
        validate: function(val) {
          return /^[a-zA-Z]+$/i.test(val) || "Must only be letters!";
        }
      },
      {
        type: "input",
        name: "internsEmail",
        message: "What is your intern's email?",
        validate: function(val) {
          return (
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
              val
            ) || "Must be an email address like john@aol.com!"
          );
        }
      },
      {
        type: "input",
        name: "internsSchool",
        message: "What is your intern's school?",
        validate: function(val) {
          return /[a-z1-9]/i.test(val) || "Must only be letters!";
        }
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
        message: "What is your engineer's first name?",
        validate: function(val) {
          return /^[a-zA-Z]+$/i.test(val) || "Must only be letters!";
        }
      },
      {
        type: "input",
        name: "engineersId",
        message: "What is your engineers ID?",
        validate: function(val) {
          return (
            /^[0-9]*$/i.test(val) || "Must be a number/numbers between 0-9"
          );
        }
      },
      {
        type: "input",
        name: "engineersGithub",
        message: "What is your engineers Github?",
        validate: function(val) {
          return /^(\w+\S+)$/i.test(val) || "Must be a Github user name!";
        }
      }
    ])
    .then(enginnerAnswers => {
      askForEmployee();
    });
};

promptManager();
