$(document).ready(handleReady);

let globalSign = ''

function handleReady() {
    console.log('JS and JQuery working');

    $('.math-btns').on('click', grabSign);

}


function grabSign() {
    let thisSign = $(this).text();
    globalSign = thisSign;
    console.log('Math Sign: ', globalSign)
}
