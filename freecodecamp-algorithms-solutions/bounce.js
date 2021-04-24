function bounce(arr){
	var array = arr;
	var returnedArr = [];
	for(var i = 0; i < array.length; i++){
		if(array[i] ){
			returnedArr.push(array[i]);
		}
	}

	return returnedArr;
}

console.log(bounce([7, "ate", "", false, 9]));
console.log(bounce([false, null, 0, NaN, undefined, ""]));
// console.log(bounce([1,2,3,4,5,6,7,8,9]));