const min = 25;
const km = 11.5;
let calcKm = 0;
let calcMin = 0;

if (km > 10) {
    calcKm = 700 + ((km - 10) * 50);
} else {
    calcKm = km * 70;
}

if (min > 20) {
    calcMin = 1000 + ((min - 20) * 30);
} else {
    calcMin = min * 50;
}

console.log(calcKm + calcMin);