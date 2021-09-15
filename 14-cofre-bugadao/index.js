const input = "cubos\ncuoosb\n";

const pass = input.trim().split('\n')[0] ? input.trim().split('\n')[0] : '';
const userEntry = input.trim().split('\n')[1] ? input.trim().split('\n')[1] : '';
const foundChars = [];
let pastJ = 0;

for (let i = 0; i < pass.length; i++) {

    for (let j = 0; j < userEntry.length; j++) {

        if (pass[i] === userEntry[j]) {
            if (j > pastJ || i === 0){
                pastJ = j;
                foundChars.push(userEntry[j]);
                break;
            }
            
        }
    }
}

console.log(pass === foundChars.join('') ? "SIM" : "NAO");