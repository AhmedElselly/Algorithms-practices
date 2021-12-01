const population = () => {
	let first = 102334404;
	let second = 104502376;
	let year = 1;
	let growthRate;
	let result = [];
	while (year < 10){
		growthRate = ((second - first) / second) * 100;
		second = first;
		year++;

	}
	return growthRate
}

console.log(population());