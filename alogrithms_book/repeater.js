function repeater(count){
	return function allTheAs(){
		return ''.padStart(count, 'A');
	}
}

console.log(repeater(10)())