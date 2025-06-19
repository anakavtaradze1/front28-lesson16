const myArr = [10, 20, 30, 40, 50];
const sum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
console.log(sum);

const arithmeticMean = sum / myArr.length;
console.log(arithmeticMean);

const product = {
  productName: "iphone",
  memory: "128GB",
  isAvailableAt: ["tbilisi", "kutaisi", "gori", "batumi"],
};
const message = `${product.productName} with ${product.memory} memory is available at ${product.isAvailableAt[0]}`;
console.log(message);

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1922,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    yearPublished: 1951,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    yearPublished: 1851,
  },
];
console.table(books);
