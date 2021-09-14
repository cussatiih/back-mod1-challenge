const input = ['cubos', 'cuggbyos'];

const pass = input[0];
const userEntry = input[1];
let found;
let pastJ = 0;

for (let i = 0; i < pass.length; i++) {
    found = false;
    for (let j = 0; j < userEntry.length; j++) {
        if (pass[i] === userEntry[j]) {
            if (i === 0 || j > pastJ) {
                pastJ = j;
                found = true;
            } else {
                found = false;
            }
            break;
        }
    }
    if (!found) break;
}

if (!found) {
    console.log("NAO");
} else {
    console.log("SIM");
}
