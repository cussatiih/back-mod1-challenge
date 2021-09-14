let input = "CAPS";
let output = "";

if (input[0] === input[0].toLowerCase() && input.substr(1, (input.length - 1)) === input.substr(1, (input.length - 1)).toUpperCase()) {
    output = `${input.substr(0, 1).toUpperCase()}${input.substr(1, (input.length - 1)).toLowerCase()}`;
} else if (input === input.toUpperCase()) {
    output = input.toLowerCase();
} else {
    output = input;
}

console.log(output);