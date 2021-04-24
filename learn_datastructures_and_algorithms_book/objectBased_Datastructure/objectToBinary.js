const Stack = require('./objectBasedDataStructure');

function decimalToBinary(decimalNumber){
	let remStack = new Stack();
	let rem;
	let number = decimalNumber;
	let binaryString = '';

	while(number > 0){
		rem = number % 2;
		console.log('rem', rem)
		remStack.push(rem);
		number = Math.floor(number / 2);
	}

	remStack.print()
	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}

console.log(decimalToBinary(10))

console.log(1 % 2)