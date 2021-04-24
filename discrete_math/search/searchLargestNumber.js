const array = [1,2,3,4,6,3,2,1];

function searchLargestInteger(arr){
	let temp = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(temp < arr[i]){
			temp = arr[i];
		}
	}
	return temp;
}

console.log(searchLargestInteger(array));