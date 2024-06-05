document.addEventListener("DOMContentLoaded", () => {
    const firstNumInput = document.getElementById("first_num");
    const secondNumInput = document.getElementById("second_num");
    const addButton = document.querySelector(".bttn-1");
    const subButton = document.querySelector(".bttn-2");
    const multiplyButton = document.querySelector(".bttn-3");
    const divideButton = document.querySelector(".bttn-4");
    const resultValue = document.getElementById("result_value");

    function Operation(operation) {
        const firstNum = parseInt(firstNumInput.value);
        const secondNum = parseInt(secondNumInput.value);
        let result;

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Please enter valid numbers");
            return;
        }

        switch (operation) {
            case "ADD":
                result = firstNum + secondNum;
                break;
            case "SUB":
                result = firstNum - secondNum;
                break;
            case "MULTIPLY":
                result = firstNum * secondNum;
                break;
            case "DIVIDE":
                if (secondNum === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
                result = firstNum / secondNum;
                break;
        }

        resultValue.textContent = result;
    }

    addButton.addEventListener("click", () => Operation("ADD"));
    subButton.addEventListener("click", () => Operation("SUB"));
    multiplyButton.addEventListener("click", () => Operation("MULTIPLY"));
    divideButton.addEventListener("click", () => Operation("DIVIDE"));
});