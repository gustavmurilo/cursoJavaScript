/*solução 1
function verificaPalidromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo(ana)); */

//solução 1
// omo

function verificaPalidromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]) {
        return false;
        }
        
    }

    return true;
}

console.log(verificaPalidromo2("abba"));