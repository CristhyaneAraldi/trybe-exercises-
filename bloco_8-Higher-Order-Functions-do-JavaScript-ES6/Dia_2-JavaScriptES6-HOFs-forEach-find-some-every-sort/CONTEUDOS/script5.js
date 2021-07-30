// Conteudos
// Array.sort();

// ex 1
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();

console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// ================================

// ex 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort();

console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// ================================

// ex 3
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);

console.log(points); // [1, 5, 10, 25, 40, 100]

// ================================

// ex 4
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => b - a);

console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
