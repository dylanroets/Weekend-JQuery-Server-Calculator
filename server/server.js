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
    // prevEquation.push(equationObj);
    // console.log('Equation posted: ', equationObj);
    // console.log('Previous Equations', prevEquation);
    // console.log('sign received', equationObj.operator);
    res.sendStatus(200);
    // going to use a switch statement to solve for problems
    switch(equationObj.operator) {
        case '+':
            equationObj.answer = +equationObj.num1 + +equationObj.num2;
            break;
        case '-':
            equationObj.answer = +equationObj.num1 - +equationObj.num2;
            break;
        case '*':
            equationObj.answer = +equationObj.num1 * +equationObj.num2;
            break;
        case '/':
            equationObj.answer = +equationObj.num1 / +equationObj.num2;
            break;
    }
    equationAnswer.push(equationObj)
    console.log('equation result: ', equationObj);//got rid of the .answer and sending whole object
    // result from the problem is here
})// Just had an AHA moment where I realized i could send over the whole equationObj,
// instead of just the answer and then parse out the data to append on the client side!
let equationAnswer = []
// sending back answer to the problem
app.get('/receive-answer', (req, res) => {
    console.log('in answer app.get', equationAnswer);
    res.send(equationAnswer);

})


//Array for all previous equations
// let prevEquation = []
// testing equations history



app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});