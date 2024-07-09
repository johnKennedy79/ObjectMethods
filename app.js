console.log("Test");

const person = {
  name: "John",
  age: 45,
  favouriteColour: "crimson",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello();

const bike = {
  Make: "Honda",
  Model: "CBR",
  SubModel: "RR",
  Colour: "Red",
  EngineCapacity: "900cc",
};
console.table(bike);

const book = {
  Title: "Shibumi",
  Author: "Trevanian (Rodney William Whitaker)",
  Language: "English",
  Published: "1979",
  Discription:
    "Shibumi is set in the 1970s and details the struggle between the Mother Company, a conspiracy of energy companies that secretly controls much of the western world, and a highly skilled assassin, Nicholaï Hel.",
};

console.table(book);
