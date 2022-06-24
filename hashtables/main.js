const hash = (key, length) => {
	let total = 0;
	for(let char of key){
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % length;
	}
	return total
}

console.log(hash('pink', 10))