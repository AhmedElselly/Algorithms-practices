const shuffle = string => {
	let str = string;
	let arr = [];
	
	for(let i = 0; i < str.length; i++){
		arr.unshift(str[i])	
	}
	
	for(let i = 0; i < arr.length; i++){
		for(let j = 1; j < arr.length; j++){
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp
		}
	}

	let stringified = stringify(arr);

	return stringified;
}


function stringify(arr){
	let temp = `${arr[0]}`;
	for(var i = 1; i < arr.length; i++){
		temp = `${temp}${arr[i]}`;
	}
	return temp;
}

console.log(shuffle('generation'));