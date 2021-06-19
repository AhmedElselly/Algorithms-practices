// Nested loop
const arrayDublicates = arr => {
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] === arr[j]){
				return true;
			}
		}
	}
	return false;
}

// Frequency Counter

function frequencyCounter(arr) {
	let obj = {};
	for(var i = 0; i < arr.length; i++){
		if(obj[arr[i]]){
			obj[arr[i]] += 1;
		} else {
			obj[arr[i]] = 1;
		}
	}

	for(let num in obj){
		if(obj[num] % 2 === 0){
			return true;
		}
	}
	return false;
}
var t0 = console.time()

frequencyCounter([1,2,3,5,4]);

var t1 = console.timeEnd()

// console.log(`it took ${t1 - t0}`)