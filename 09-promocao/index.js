const precos = [150, 50];

const total = precos.reduce((acc, item) => acc + item);

if (precos.length >= 3) {
    const menor = precos.reduce((acc, item) => acc < item ? acc : item);
    console.log(total - (menor * 0.5));
} else {
    console.log(total);
}