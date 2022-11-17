//desafio 1
let lines = gets().split('\n');

var N = parseInt(lines.shift());
for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) print(i + '^2 = ' + (i*i));
}

//desafio 2
let lines = gets().split('\n');

var N = parseInt(lines.shift());
for (let i = 1; i < 10000 ; i++) {
    if ( i % N == 2) print(i);
}

//desafio 3
let lines = gets().split('\n');

let n = parseInt(lines.shift());
if (n>=1 && n<=34) {

const texto = "Life is not a problem to be solved";

const parcial = texto.substr(0, n)

const maiuscula = parcial.toUpperCase();

print(maiuscula);

}

//desafio 4
let lines = gets().split("\n");
let t = 5;
let todas = 0;

let line = lines.shift().split(' ');

for(let i = 1; i < t; i++){
  todas = todas + parseInt(line.slice(-i));
}
todas = todas - 3;

console.log(todas);

//desafio 5

let line = gets().split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let q = parseInt(a*b);
print(q);
