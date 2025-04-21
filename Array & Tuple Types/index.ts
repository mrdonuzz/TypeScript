//1
const scores: number[] = [85, 92, 77];

//2
const tags: string[] = ["JavaScript", "TypeScript", "React"];

//3
type Product = {
  name: string;
  price: number;
};

let productList: Product[] = [
  { name: "Laptop", price: 9.99 },
  { name: "Keyboard", price: 4.99 },
];

//4
let userEntry: [string, number] = ["John Doe", 30];
console.log(userEntry);

//5
type CartItem = [string, number];

let cart1: CartItem = ["Pen", 9];
let cart2: CartItem = ["Pencil", 4];

console.log(`Your item is ${cart1[0]} and it costs $${cart1[1]}`);
console.log(`Your item is ${cart2[0]} and it costs $${cart2[1]}`);
