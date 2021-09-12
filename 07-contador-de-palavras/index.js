const texto = "Cuidado, pois usuarios  as  vezes deixam espacos vazios no fim do texto sem querer ";

const output = texto.trim().split(" ").filter(x => x !== "");
console.log(output.length);