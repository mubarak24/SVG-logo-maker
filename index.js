const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require("./lib/shapes");

const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Text',
            message: 'Text can only be 3 characters',
            validate: (Text) => {

                if (Text.length <= 3) {
                    return true;
                } else {
                    console.log ("Shouldn't contain more than 3 characters");
                    return false;
                }
            },
        },

        {
            type: 'input',
            name: 'Textcolor',
            message: 'Enter a text color keyword',
        },

        {
            type: 'list',
            name: 'Shape',
            message: 'Choose from a list of shapes',
            choices: ["triangle", "circle", "square"],
        },

        {
            type: 'input',
            name: 'Shapecolor',
            message: 'Enter a shape color keyword',
        },
    ]);
};

const init = () => {
    prompt()
        .then((answers) => {
            let newShape;
            if (answers.Shape === "triangle") {
                newShape = new Triangle(answers.Shapecolor, answers.Textcolor, answers.Text)
            } else if (answers.Shape === "circle") {
                newShape = new Circle(answers.Shapecolor, answers.Textcolor, answers.Text)
            } else {
                newShape = new Square(answers.Shapecolor, answers.Textcolor, answers.Text)
            };
            console.log(newShape.render());
            fs.writeFile('logo.svg', newShape.render(),
                (err) => {
                    if (err)
                        console.log(err);
                    else {
                        console.log("Generated logo.svg\n");
                    }
                })
        }
        )
}

init();