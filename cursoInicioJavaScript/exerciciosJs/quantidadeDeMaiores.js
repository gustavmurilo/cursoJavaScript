const pessoas=[
{
    nome:"josé",
    idade: 24
},
{
    nome:"Maria",
    idade: 19
},
{
    nome:"Gustavo",
    idade: 20
},
{
    nome:"Ariane",
    idade: 17
}
];

function criarRelatorio(lista) {
    let maiores =0;
    let menores =0;

    for(let item of lista) {
        const idade = item.idade;
        if(idade>=18){
            maiores++;
        }else{
            menores--;
        }
    
    }

    const resposta = {
        qtdMaiores: maiores,
        qtdMenores: menores,
        percMaiores: maiores / pessoas.length,
        percMenores: menores /pessoas.length
    };
    console.log(resposta);
}

criarRelatorio(pessoas);