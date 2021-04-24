const init = num => {
	console.log(num)
	if(num === 0) return num;
	num--;
	return init(num)
}

console.log(init(10))