const pessoa = {
    nome:'Gustavo',
	idade: 0,
	ehMaiorDeIdade: true,
	altura: 1.73
};

let texto = pessoa.nome + " tem " + pessoa.idade;
console.log(texto);

if (pessoa.idade > 60) {
    console.log(pessoa.nome + "E é idosa");
}   else if (pessoa.idade > 18) {
    console.log(`${pessoa.nome} é um adulto`);
}   else {
    console.log("E não é adulta");
}
            