function imprimirValorDoDesconto(valorDaCompra, hora, cupom) {
    let valorDoDesconto;
    if (cupom === 'RANGOBARATO') {
       if (hora >= 12 && hora < 14) {
           if (valorDaCompra >= 100) {
            valorDoDesconto = valorDaCompra *20/100;
        } else {
            valorDoDesconto = valorDaCompra * 10/100;
        }
        console.log(`Valor do dosconto é" ${valorDoDesconto}.`);
    } else {
        console.log("Este cupom não é válido este horário.");
        }
    } else {
        console.log("Não possui cupom.");
    }

}

imprimirValorDoDesconto(150, 13, "RANGOBARATO");
