function seekAndDestroy(arr){
	var array = arguments[0];
	var newArr = [];
	var found = false;
	var arg1 = arguments[1];
	var arg2 = arguments[2];
	var removed;
	function destroy(arg){
		var i = 0;
		// while(array[i]){
			
		// 	// console.log(array[i])
		// 	if(array[i] === arg){
		// 		console.log(array[i])
		// 		// newArr = array.remove(array[i]);
		// 		delete array[i]
		// 	} 

		// 	i++;

		// }

		removed = array.filter(item => item === arg);
		console.log(removed)

	}
	// console.log(array);
	destroy(arguments[1])
	destroy(arguments[2])
	return removed;
}

console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3));