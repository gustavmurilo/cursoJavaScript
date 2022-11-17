/*function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);

        }
    } 
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Felipe", "Admin");
usuarios.set("Lucia", "Usuer");
usuarios.set("Gustavo", "Usuer");

console.log(getAdmins(usuarios))*/

const meuArray = [30, 10, 40, 5, 120, 1223, 1425, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(arr));