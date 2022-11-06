const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET and POST routes go here!
// GET Equation Route
app.post('/sending-equation', (req, res) => {
    let equationObj = req.body;
    prevEquation.push(equationObj);
    console.log('Equation posted: ', equationObj);
    console.log('Previous Equations', prevEquation);
    console.log('sign received', equationObj.operator);
    res.sendStatus(200);
    switch(equationObj.operator) {
        case '+':
            equationObj.answer = Number(+equationObj.num1 + +equationObj.num2);
            break;
        case '-':
            equationObj.answer = Number(+equationObj.num1 - +equationObj.num2);
            break;
        case '*':
            equationObj.answer = Number(+equationObj.num1 * +equationObj.num2);
            break;
        case '/':
            equationObj.answer = Number(+equationObj.num1 / +equationObj.num2);
            break;
    }
    console.log('switch result: ', equationObj.answer);



})

//Array for all previous equations
let prevEquation = []
// testing equations history

// switch(equationObj.operator) {
//     case "+":
//         return equationObj.num1 + equationObj.num2;
//     case "-":
//         return equationObj.num1 - equationObj.num2;
//     case "*":
//         return equationObj.num1 * equationObj.num2;
//     case "/":
//         return equationObj.num1 / equationObj.num2;
// }
// console.log('switch result: ', equationObj);








app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});