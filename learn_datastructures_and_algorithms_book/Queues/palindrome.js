const Dequeue = require('./dequeues')

function palindrome(string){
	if(!string){
		return false;
	}

	const dequeue = new Dequeue();

	const lowerString = string.toLowerCase().split(' ').join('');
	let isEqual = true;
	let firstChar, lastChar;

	for(var i = 0; i < lowerString.length; i++){
		dequeue.addBack(lowerString.charAt(i));
	}

	// console.log(dequeue)

	while(dequeue.size() > 1 && isEqual){
		firstChar = dequeue.removeFront();
		lastChar = dequeue.removeBack();
		if(firstChar !== lastChar){
			isEqual = false;
		}

		console.log(firstChar)
		console.log(lastChar)
	}

	return isEqual;
}

console.log(palindrome('nonesense'))