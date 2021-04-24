const array = ['Ahmed', 'Yehia', 'Elselly', 'Dara', 'Yana', 'Hala'];

function linearSearch(arr, target){
	let temp = arr[0];
	if(temp !== target){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === target){
				return i;
			}
		}
	}
	return 0;
}

console.log(linearSearch(array, 'Dara'));