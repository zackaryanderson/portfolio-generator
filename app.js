//include exterior files
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// //establish variables

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html',pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is yor name?'
        }
    ])
    .then(answers => console.log(answers));