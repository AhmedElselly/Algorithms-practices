function repeatString(str, num){
	let string = '';
	while(num > 0){
		string += str;
		num--;
	}

	return string;	
}

console.log(repeatString('abc', 3)) // 'abcabcabc'