let input = document.getElementById('inputBox');
let result = document.getElementById('resultBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === 'AC') {
            string = "";
            input.innerHTML = "";
            result.innerHTML = "";
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.innerHTML = string;
            updateResult();
        } else if (buttonText === '=') {
            try {
                string = eval(string).toString();
                input.innerHTML = string;
                result.innerHTML = "";
            } catch (error) {
                input.innerHTML = "Error";
                result.innerHTML = "";
            }
        } else {
            if (buttonText === 'x') {
                buttonText = '*';
            }
            string += buttonText;
            input.innerHTML = string;
            updateResult();
        }
    });
});

function updateResult() {
    try {
        let evaluated = eval(string);
        result.innerHTML = evaluated !== undefined ? evaluated : "";
    } catch (error) {
        result.innerHTML = "";
    }
}