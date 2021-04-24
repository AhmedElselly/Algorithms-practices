var dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

// console.log(dictionary)

function encodeId(num){
	var base = dictionary.length;
	var encoded = '';
	if(num===0){
		return dictionary[0];
	}

	while(num > 0){
		encoded += dictionary[(num % base)];
		num = Math.floor(num / base);
	}

	return reverseWord(encoded);
}

function reverseWord(str){
	var reversed = '';
	for(var i = str.length - 1; i >= 0; i--){
		reversed += str.charAt(i);
	}
	return reversed;
}

function decodeId(id){
	var base = dictionary.length;
	var decoded = 0;
	for(var i = 0; i < id.split('').length; i++){
		decoded = decoded * base + dictionary.indexOf(id.charAt(i));
	}
	return decoded;
}

console.log(encodeId(11231230))
console.log(decodeId('VhU2'))