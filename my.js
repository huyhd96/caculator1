var output = output

function setOutput(number) {
    output += number;
}

function cal() {
    let input = output;
    console.log(input)

    //ham eval() tinh toan bieu thuc string
    result = eval(input);

    output = result;
    return false
}

function clr() {
    output = ''
}

function del() {
    let input = output
    let newInput = input.substring(0, input.length - 1);
    output = newInput;
}