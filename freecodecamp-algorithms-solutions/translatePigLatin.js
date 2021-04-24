function translatePigLatin(str){
	const vowels = ['a', 'i', 'e', 'o', 'u'];
	var arr = [];
	var result;
	if(!vowels.includes(str[0])){
		for(var i = 0; i < str.length; i++){
			arr.push(str[i]);
		}

		var shifted = arr.shift();
		var arrayToString = arr.join('');
		result = `${arrayToString}${shifted}ay`;
	} else {
		result = str + 'way';
	}
	return result;
}

console.log(translatePigLatin('richard')); // 'ichardray'
console.log(translatePigLatin('ahmed')); // 'ichardray'


