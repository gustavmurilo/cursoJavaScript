function filtraPares (arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 22, 33, 24, 54, 66, 47];

console.log(filtraPares(meuArray));