let array = []

array.push(3, 2, 5, 6)

/*array.pop() // retira o ultimo elemento
array.shift() // retira o primeiro elemento
array.unshift(2) // retira o elemento declarado
*/

for(let i = 0; i < array.length; i++) {
    console.log(array[i]) 
}

console.log(array.includes(7))

console.log(array.every(item => item === 5))

console.log(array.some(item => item === 5))

console.log(array.reverse())