function setOutput(number) {
    document.getElementById('output').value += number;
}

function cal() {
    let input = document.getElementById('output').value;
    console.log(input)

    //ham eval() tinh toan bieu thuc string
    result = eval(input);

    document.getElementById('output').value = result;
    return false
}

function clr() {
    document.getElementById('output').value = ''
}

function del() {
    let input = document.getElementById('output').value
    let newInput = input.substring(0, input.length - 1);
    document.getElementById('output').value = newInput;
}