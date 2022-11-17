function calculadora(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Julian",
    idade: 30,
}

const animal = {
    nome: "Bartholomeu",
    idade: 7,
    raça: "Boiadeiro de Berna",
}

console.log(calculadora.apply(pessoa2, [30]));