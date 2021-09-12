const numeros = [11,11,11,11,11,11,11,11,11,11,11];


const soma = numeros.reduce((acc, item) => acc + item);
console.log(soma > numeros.length && soma % numeros.length !== 0 ? soma % numeros.length : numeros.length);