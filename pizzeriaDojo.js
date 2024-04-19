
function pizzaOven(tipo, salsa, queso, ingrediensteExtra) {
    var pizza = {};
    pizza.tipo = tipo;
    pizza.salsa = salsa;
    pizza.queso = queso;
    pizza.ingredientesExtra = ingrediensteExtra;
    return pizza;
}
    
var pizza1= pizzaOven("estilo Chicago", "tradicional", ["mozzarela"], ["pepperoni", "salchichas"]);
var pizza2= pizzaOven("Lanzada a mano", "marinara", ["mozzarela", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var pizza3= pizzaOven("Napolitana", "clasica de la casa", ["mozzarela"], ["tomates", "aceitunas"]);
var pizza4= pizzaOven("Pollo catupiry", "tradicional", ["mozzarela", "catupiry"], ["pollo"]);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
