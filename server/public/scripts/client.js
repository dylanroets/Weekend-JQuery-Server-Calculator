$(document).ready(handleReady);

let operator = 0
let number1 = 0
let number2 = 0

function handleReady() {
    console.log('JS and JQuery working');
    // Grabs input numbers
    $('#equal-btn').on('click', sendEquation)
    // Grabs math sign
    $('.math-btns').on('click', grabSign);
    // Clears the input fields
    $('#clear-btn').on('click', clearFields);

}

function sendEquation() {
    console.log('in sendEquation');
    $.ajax({
        method: 'POST',
        url: '/sending-equation',
        data: {
            num1: $('#num1-input').val(),
            operator: operator,
            num2: $('#num2-input').val()
        }
    }).then (function(response){
        console.log('equation sending: ', response);
    }).catch (function(error){
        alert('Error Sending Equation: ', error)
    })
}
function grabSign() {
    let thisSign = $(this).text();
    operator = thisSign;
    console.log('Math Sign: ', operator)
}

function clearFields(){
    $('.inputs').val('');
}