class Temperature{
	constructor(temp){
		this.temp = temp || 0;
	}

	toFahrenheit(){
		return (this.temp * 1.8) + 32;
	}
}

const degrees = new Temperature(32);
console.log(degrees.toFahrenheit())