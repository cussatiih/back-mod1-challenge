const input = "cubos\ncuggbyos\n";

const arrayInput = input.trim().split('\n');

const pass = arrayInput[0];
const userEntry = arrayInput[1];
let found;
let pastJ = 0;

pass.split('').forEach(x => {
    found = false;

    for (let j = 0; j < userEntry.length; j++) {

        if (x === userEntry[j]) {

            if (j === 0 || j > pastJ) {
                pastJ = j;
                found = true;
            }

            break;
        }
    }
});

if (!found) {
    console.log("NAO");
} else {
    console.log("SIM");
}


