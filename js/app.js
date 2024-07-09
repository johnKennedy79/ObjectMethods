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

//game

const warrior = {
  Name: "Warrior",
  Attack: 65,
  Defence: 210,
  Health: 500,
  warriorattack: function () {
    ork.Health = ork.Health - warrior.Attack - ork.Defence;
    return ork.Health;
  },
};

const ork = {
  Name: "Ork",
  Attack: 48,
  Defence: 130,
  Health: 480,
  orkattack: function () {
    warrior.Health = warrior.Health - ork.Attack - warrior.Defence;
    return warrior.Health;
  },
};

warrior.warriorattack();
console.log(ork.Health); //285 480-65-130
