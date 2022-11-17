let nome="João";
let sobrenome = "Paulo";

let concatenado = nome.concat(sobrenome);
concatenado.length;

let exemplo = new String("blablabla");
typeof exemplo;
let vazio = " ";
typeof vazio;

concatenado = nome + " " + sobrenome;
concatenado = nome + "\n" + sobrenome;

concatenado = "\"";
concatenado = `${nome} ${sobrenome}`;

let frase = "Olá, tudo bem?";

frase.split("");
frase.split(" ");

console.log(frase.includes("tudo"));

console.log(frase.startsWith("O"));

console.log(frase.endsWith("?"));

let stringModificada = frase.replace(",", "!");

console.log(frase)
console.log(stringModificada)