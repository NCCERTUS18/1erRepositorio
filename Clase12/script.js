
//* 10.1 booleans
let isOnline = true;
let hasAccess = true;
let booleanOutput = "";

if (isOnline && hasAccess) {
    booleanOutput = "el usuario esta en linea y tiene acceso.";
} else {
    booleanOutput = "el usuario no tiene acceso";
}
    
console.log(booleanOutput);

// 10.2 arrays o arreglos 
let arreglovacio =[];
let fruits = ["manzana", "banana", "naranja"];
let arrayOutput = `Frutas: ${fruits.join(", ")} (total: ${fruits.length})`;
console.log(arrayOutput);

// 10.5 objetos
let person = {
    name: "nicolas",
    age: 18,
    isStudent: false,
    saludar: function() {
        return `Hola, mi nombre es ${this.name}`;
    }
};
let objectOutput = person.saludar();
console.log(objectOutput);

// 10.8 funciones
function multiplicacion(a, b) {
    return a * b;
}
let multiOutput = `multiplication de 5 y 10: ${multiplicacion(5, 10)}`;
console.log(multiOutput);

// 10.0 retorno de funciones
function getSaludar(ale) {
    return `hola, ${ale}!`;
} 
let greentingOutput = getSaludar("ale♥♥");
console.log(greentingOutput);

// mostrando todos los resultados en el HTML
document.getElementById('output').innerHTML = `
    <h2>Resultados:</h2>
    <p>${booleanOutput}</p>
    <p>${arrayOutput}</p>
    <p>${objectOutput}</p>
    <p>${multiOutput}</p>
    <p>${greentingOutput}</p>
`;

















