const string = 'racecar';
const dog = 'dog';

function palindrome(str){
	let subString = ''; // racecar
	for(var i = str.length - 1; i >= 0; i--){
		subString+=str[i];
	}

	if(str === subString){
		return 'palindrome';
	} else {
		return 'not palindrome';
	}
}

console.log(palindrome(string));
console.log(palindrome(dog));