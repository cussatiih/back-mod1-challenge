const lista = [12, 8, 7];

const maioresDeIdade = lista.filter(x => x >= 18);

if (maioresDeIdade.length > 0) {
    const menorIdade = maioresDeIdade.reduce((acc, item) => acc <= item ? acc : item);
    console.log(menorIdade);
} else {
    console.log("CRESCA E APARECA");
}