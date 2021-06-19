const same = (arr1, arr2) => {
	let arr = [];
	let obj = {};
	for(var i = 0; i < arr1.length; i++){
		let squared = arr2.indexOf(arr1[i]**2);	
		if(squared === -1){
			return false;
		}
		arr2.splice(squared, 1);
	}
	return true;
}

console.log(same([2,4,3], [9,16,4]));