function Animal(name, type){
	this.name = name;
	this.type = type;
}

Animal.prototype.sayName = function() {
	return this.name;
};

Animal.prototype.sayType = function() {
	return this.type;
};

function Dog(name){
	Animal.call(this, name, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);

var doggie = new Dog('Bud');
console.log(doggie.sayName())
console.log(doggie.sayType())