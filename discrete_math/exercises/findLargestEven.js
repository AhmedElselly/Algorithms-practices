const array = [1,2,3,4,5,6,7,12,8,9,10];


function findLargestEven(arr){
	// let max = arr[0];
	let subArr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			subArr.push(arr[i]);
		}
	}

	let max = subArr[0];
	for(var i = 0; i < subArr.length; i++){
		if(subArr[i] > max){
			max = subArr[i];
		}
	}

	return max;

}

console.log(findLargestEven(array));