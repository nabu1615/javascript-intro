 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos

function Athlete (name, height, sport) {
	this.name = name;
	this.height = height;
	this.sport = sport;
}

// 1. Añadir propiedades a objetos

a1 = {
<<<<<<< HEAD
	name: 'name1',
	age: 23
}

a2 = {
	name: 'name2',
	age: 12
}

function addWinToAthletes(athletes, event) {
	athletes.forEach(function (athlete) {
		athlete.win = function() {
			console.log(`${this.name} won the ${event}`)
		}
	})
}
=======
  name: 'fasd',
  age: 12
}

a2 = {
  name: 'afsdf',
  age: 324
}


var name = 'juan'

// Function Declaration
function name() {

}

// Function Expresssion
var name = function() {
  console.o
}




function addWinToAthletes(athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${this.name} won the ${event}`)
    }
  })
}




addWinToAthletes([a1, a2], 'futbol')
console.log(a1.win())
console.log(a2.win())

// 2. Voltea un String

function flip(word) {
	return word.split('').reverse().join('')
}

console.log(flip('hello'))



// 3. Remueve numeros impares

var even_odd = [0,1,2,3,4,5,6]

function odd(array) {
	var odd = []
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 != 0) {
			odd[i] = array[i]
		}
	}
	return odd;
}

console.log(odd(even_odd));


// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
