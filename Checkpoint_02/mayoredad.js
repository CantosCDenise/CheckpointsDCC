// Escribe una función que tome una matriz de objetos como parámetro. 
// Cada objeto tiene una propiedad de "nombre" y una propiedad de "edad". 
// La función debería devolver el objeto con mayor edad.

const array = [
    {
        name: "Denise",
        age: 24
    },
    {
        name: "Denadise",
        age: 29
    },
    {
        name: "Dendadise",
        age: 30
    },
    {
        name: "Denfaise",
        age: 15
    }
]

function mayorEdad (arr){
    const newArr = arr.sort ((a, b) => b.age - a.age)
    const oldestPers = newArr[0]
    return oldestPers
}

console.log(mayorEdad(array))

