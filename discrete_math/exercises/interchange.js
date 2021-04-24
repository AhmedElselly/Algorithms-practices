const interchange = (x, y) => {
	// x = 5, y = 4

	let temp = x;
	x = y;
	y = temp;
	return temp;
}

console.log(interchange(5, 4));