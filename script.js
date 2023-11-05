const keyword = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Learn React",
    "Learn Node",
    "Learn BootStrap",
    "Learn Express",
    "Learn MongoDB"
]

const inputBox = document.getElementById("input-box");
const resultBox = document.querySelector(".result-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = keyword.filter((word) => {
            return word.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onClick =selectInput(this)>" + list + "</li>"
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML
    resultBox.innerHTML = ''
}