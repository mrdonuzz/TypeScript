//1
type Status = "loading" | "success" | "error";
let appStatus: Status = "loading";
console.log(appStatus);

//2
type ID = string | number;
let userID: ID = "ID123";
let orderID: ID = 123;
console.log(userID, orderID);

//3
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string;
};

let user1: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
  email: "alice@example.com",
};

console.log(user1);

//4
let user2: User = {
  name: "Bob",
  age: 25,
  isAdmin: true,
};

console.log(user2);

//5
function printUser(user: User) {
  console.log(
    `Name: ${user.name}, Age: ${user.age}, Admin: ${user.isAdmin}, Email: ${
      user.email ?? "N/A"
    }`
  );
}

printUser(user1);
