function confirmEnding(str, target){
	// calculate the string length
	const stringLength = str.length;

	// we should get the last element in the string
	const targetLength = target.length;
	const test = str.substring(stringLength-targetLength)
	// const test = str.substring(str.length - targetLength)
	if(test === target) return true;
	else return false;
	return test
}

console.log(confirmEnding('mido', 'o'))
console.log(confirmEnding('he should have give me a new name', 'name'))
