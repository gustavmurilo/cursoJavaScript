
const alunos = [
    {
        nome: 'Maria',
        nota: 9,
        turma: "18",
    },
    {
        nome: 'Gustavo',
        nota: 10,
        turma: "19",
    },
    {
        nome: 'Felipe',
        nota: 7,
        turma: "18",
    },
    {
        nome: 'Ariane',
        nota: 5,
        turma: "20",
    },
    {
        nome: 'Paula',
        nota: 7,
        turma: "20",
    },
    {
        nome: 'Ana',
        nota: 9,
        turma: "20",
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];
    
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));