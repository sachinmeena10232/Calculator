// console.log('this is my calculator');
let screen = document.getElementById('calcscreen');
let btns = document.querySelectorAll('button');
let screenDisplay = '';
for (item of btns) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText; // this well get the value of what is written in Button
        // console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';

            screenDisplay += buttonText;
            screen.value = screenDisplay;
        } else if (buttonText == 'C') {
            screenDisplay = ""; // this will blank the screen's display
            screen.value = screenDisplay; // this will clear the screen's value
        } else if (buttonText == '=') {
            screen.value = eval(screenDisplay); // this will evaluate the result of the expression
            screenDisplay = "";
        } else if (buttonText == '←') {
            screen.value = screenDisplay.substr(0, screenDisplay.length - 1);
            screenDisplay = screen.value;
        } else {
            screenDisplay += buttonText;
            screen.value = screenDisplay;
        }

    })

}