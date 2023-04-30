const inquirer = require('inquirer');

const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Text',
            message: 'Text can only be 3 characters',
        },

        {
            type: 'input',
            name: 'Color',
            message: 'Enter a text color keyword',
        },

        {
            type: 'input',
            name: 'Shape',
            message: 'Choose from a list of shapes',
        },

        {
            type: 'input',
            name: 'Color',
            message: 'Enter a shape color keyword',
        },
    ]);
};

const init = () => { 
    prompt()
    .then((answers) => fs.writeFile('logo.svg', writeToFile(answers),
    (err) => {
        if (err)
          console.log(err);
        else {
          console.log("Generated logo.svg\n");
        }
      }))}

init();