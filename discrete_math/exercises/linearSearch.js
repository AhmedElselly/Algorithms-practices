const array = [1,3,4,5,6,8,9,11];

function linear(arr, x){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === x){
			return i;
		}
	}
}

console.log(linear(array, 9));