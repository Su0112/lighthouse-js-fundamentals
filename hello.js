const sayHello = function () {
  console.log("Hello, world");
};

sayHello(); //Hello, world

const sayHelloo = function (name) {
  console.log("Hello, " + name);
};

sayHelloo("Caliban"); //Hello, Caliban;
sayHelloo("Miranda"); //Hello, Miranda;
sayHelloo("Ferdinand"); //Hello, Ferdinand;

//Console.log
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};
sayHelloToConsole("John"); //Hello, John

//return instead of console.log
const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("John");
console.log(greeting); //Hello, John

// isEven function
const isEven = function (num) {
  return num % 2 === 0;
};

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven); //true
console.log(elevenIsEven); //false
