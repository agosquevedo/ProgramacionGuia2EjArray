// Función para duplicar cada número en un array
function duplicateNumbers(arr) {
    return arr.map(num => num * 2);
}

// Función para filtrar solo los números pares en un array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Función para encontrar un libro por autor en un array de objetos de libros
function findBookByAuthor(books, author) {
    return books.find(book => book.autor === author);
}

// Función para encontrar la primera persona de 25 años en un array de objetos de personas
function findPersonByAge(persons) {
    return persons
        .map(person => person.nombre.toUpperCase())
        .filter(person => person.edad > 18)
        .find(person => person.edad === 25);
}

// Función para calcular el precio final de cada producto, filtrar los que tienen precio final mayor que 50,
// y encontrar el primer producto con un descuento del 20%
function findProductsWithDiscount(products) {
    return products
        .map(product => {
            const precioFinal = product.precio * (1 - product.descuento / 100);
            return { ...product, precioFinal };
        })
        .filter(product => product.precioFinal > 50)
        .find(product => product.descuento === 20);
}

// Ejemplos de uso
const numeros = [1, 2, 3, 4, 5];
console.log(duplicateNumbers(numeros));

const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numerosPares));

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }
];
console.log(findBookByAuthor(libros, "George Orwell"));

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Ana", edad: 35 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Sofía", edad: 28 },
    { nombre: "Carlos", edad: 45 },
    { nombre: "Laura", edad: 33 },
    { nombre: "David", edad: 29 },
    { nombre: "Elena", edad: 27 }
];
console.log(findPersonByAge(personas));

const productos = [
    { nombre: "Camisa", precio: 30, descuento: 10 },
    { nombre: "Pantalón", precio: 50, descuento: 15 },
    { nombre: "Zapatos", precio: 80, descuento: 20 },
    { nombre: "Chaqueta", precio: 100, descuento: 25 },
    { nombre: "Bufanda", precio: 20, descuento: 5 },
    { nombre: "Gorra", precio: 15, descuento: 0 },
    { nombre: "Calcetines", precio: 10, descuento: 0 },
    { nombre: "Reloj", precio: 120, descuento: 30 },
    { nombre: "Bolsa", precio: 40, descuento: 10 },
    { nombre: "Gafas de sol", precio: 60, descuento: 15 }
];
console.log(findProductsWithDiscount(productos));
