//1
type Book = {
  title: string;
  author: string;
  pages: number;
};

const book1: Book = {
  title: "Jazz",
  author: "DONUZZ",
  pages: 250,
};

//2
interface Car {
  brand: string;
  model: string;
  year: number;
  electric?: boolean;
}

const myCar: Car = {
  brand: "Tesla",
  model: "Model S",
  year: 2021,
};

//3
interface Notifier {
  notify(message: string): void;
}

const notification: Notifier = {
  notify: (message) => {
    console.log(message);
  },
};

notification.notify("Hello, World");

//4
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log(myDog);

//5
interface User {
  username: string;
  isAdmin: boolean;
}

const user: User[] = [
  { username: "john", isAdmin: false },
  { username: "Elise", isAdmin: true },
];

console.log(user);
