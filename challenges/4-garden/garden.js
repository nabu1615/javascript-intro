// OOP En Javascript

//------------------------------------------------------------------------------------------------------------------
// TU CODIGO: Crea un Objeto literal "garden", y funcion constuctora y prototipos para Flower aca.
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// PRUEBAS: **NO** Cambies nada debajo de esta linea. Tu trabajo es implementar el codigo arriba para hacer que estas pruebas pasen.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

function Flower(name, color) {
  this.name = name
  this.color = color
}

Flower.prototype.identify = function() {
  return `I am an ${this.name} and I am ${this.color}.`
}

function Garden(name, location) {
  this.name = name
  this.location = location
  this.flowers = []
}

Garden.prototype.plant = function(flowers) {
  that = this
  flowers.forEach(function(flower) {
    that.flowers.push(flower)
  })
}

Garden.prototype.selectByColor = function(color) {
  count = []
  flowers.forEach(function(flower) {
    if(flower.color === color) {
      count.push(color)
    }
  })
  return count
}

Garden.prototype.selectByName = function(name) {
  count = []
  flowers.forEach(function(flower) {
    if(flower.name === name) {
      count.push(name)
    }
  })
  return count
}

var flowers = [
  new Flower("Aster", "red"),
  new Flower("Bird of Paradise", "orange"),
  new Flower("Daffodil", "yellow"),
  new Flower("Gladiolus", "pink"),
  new Flower("Iris", "purple"),
  new Flower("Narcissus", "white"),
  new Flower("Chrysanthemum", "yellow"),
];

garden = new Garden("Kula Botanical Garden", "Makawao");
garden.plant(flowers);

assert(
  garden.name === "Kula Botanical Garden", "the garden has a name"
);
assert(
  garden.location === "Makawao", "the garden is located in Maui"
);
assert(
  garden.selectByColor("yellow").length === 2, "the garden should have 2 yellow flowers"
);
assert(
  garden.selectByName("Iris").length === 1, "the garden should have 1 Iris"
);
assert(
  flowers[0].identify() === "I am an Aster and I am red.", "asters are red"
);
assert(
  flowers[2].name === "Daffodil", "expected 'Daffodil'"
);
assert(
  flowers[0].identify === flowers[5].identify, "only one implementation of the identify() function should exist"
);

console.log("Todas las Pruebas Pasan Felicitaciones!!!");
