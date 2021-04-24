const array1 = [1,2,3,3];
const array2 = [5,2,1,4];


function sym(args){
	args = [...arguments];
	
	var result = [];

	const testing = (arr1, arr2) => {
		
		for(var i = 0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) === -1 && result.indexOf(arr1[i]) < 0){
				result.push(arr1[i]);
			}
		}
	}
	testing(args[0], args[1]);
	testing(args[1], args[0]);
	// console.log(1 in obj)
	// for(var i = 0; i < arr1.length; i++){
	// 	if(arr2.indexOf(arr1[i]) === -1){
	// 		result.push(arr1[i]);

	// 	}
	// }

	// for(var i = 0; i < arr2.length; i++){
	// 	console.log(arr1.indexOf(arr2[i]))
	// 	if(arr1.indexOf(arr2[i]) === -1){
	// 		result.push(arr2[i]);
	// 	}
	// }


	


	return result.sort();
}

console.log(sym(array1, array2));