const array = [1,-2,3,4,-5,6];
const array2 = [1,2,3,4,5,6];

const searchingNegNum = (arr) => {
	let result = []
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			result.push(arr[i]);
		}
	}
	return result.length ? result : null;
}

console.log(searchingNegNum(array));