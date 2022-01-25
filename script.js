/* - - Questão 1 - - */
let frutas = ["maçã","banana","laranja","pera","manga"]
console.log(`Frutas: ${frutas}`)

/* - - Questão 2 - - */
let cars = ["BMW", "VOLVO", "TESLA"]
console.log(`CARROS: ${cars}`)

cars.splice(0,0,"MERCEDES")
console.log(`CARROS: ${cars}`)

/* - - Questão 3 - - */
let nomes = ["Oliver","Gustavo","Jeferson","Marcelo"]
console.log(`NOMES: ${nomes}`)

nomes.pop()
console.log(`NOMES: ${nomes}`)

/* - - Questão 4 - - */
let cars2 = ["BMW", "VOLVO", "TESLA","FORD"]
console.log(`CARROS: ${cars2}`)

cars2.splice(4,0,"TOYOTA","MERCEDES")
console.log(`CARROS: ${cars2}`)

/* - - Questão 5 - - */
let frutas2 = ["maçã","banana","laranja","pera","manga"]
console.log(`Frutas: ${frutas2}`)

frutas2.shift()
console.log(`Frutas: ${frutas2}`)

/* - - Questão 6 - - */
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)

numbers.sort(function(a,b){
    return (a-b)
})
console.log(numbers)