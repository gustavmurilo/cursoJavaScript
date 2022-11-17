function comparaNumeros(num1, num2) {

    if(!num1 || !num2) return "Defina 2 números diferentes de 0"
    const parametro1 = criaPrimeiraFrase(num1, num2);
    const parametro2 = criaSegundaFrase(num1, num2);
    
    return `${parametro1} ${parametro2}`;
}
    function criaPrimeiraFrase(num1, num2) {

        let saoIguais= "";

        if (num1 !== num2) {
            saoIguais = "não";
        }

        return `Os números ${num1} ${num2} ${saoIguais} são iguais.`;
    }

    function criaSegundaFrase(num1, num2) {

        const soma = num1 + num2;

        let resultado10 = "menor";
        let resultado20 = "maior";
        
        const comparar10 = soma >10;
        const comparar20 = soma <20;
    
        if (comparar10) {
            resultado10 = "maior";
        }

        if (comparar20) {
            resultado20 = "maior";
        }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}
console.log(comparaNumeros(1, 2))