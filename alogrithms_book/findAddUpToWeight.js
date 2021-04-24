function findUpToWeight(arr, weight){
	var result = [];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			console.log(arr[i], arr[j]);
			if(arr[i] + arr[j] === weight){
				return `${arr[i]}, ${arr[j]}`;
			}
		}
	}
	return -1;
}

// console.log(findUpToWeight([1,2,3,4,5], 4))

// BETTER SOLUTION O(n)

function betterSolution(arr, weight){
	var hashtable = {};
	for(var i = 0; i < arr.length; i++){
		var currentElement = arr[i];
		var difference = weight - currentElement;

		if(hashtable[currentElement] != undefined){
			return [i, hashtable[weight - currentElement]];
		} else {
			hashtable[difference] = i;
		}
	}
	return -1;
}

console.log(betterSolution([1,2,3,4,5], 4))
