const countUnique = arr => {
	if (!arr) return 0;
	let i = 0;
	let length = arr.length;

	let obj = {};
	let count = 0
	while(i < length){
		if(obj[arr[i]]){
			count++;
			i++;
			obj[arr[i]]+=1;
		} else {
			obj[arr[i]] = 1;
		}
		// console.log(count)
	}



	return obj;
}

console.log(countUnique([1, 1, 1, 1, 1, 2]));
console.log(countUnique([-2, -1, -1, 0, 1]));