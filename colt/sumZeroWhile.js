const sumZeroWhile = arr => {
	let left = 0;
	let right = arr.length - 1;

	// loop throw the array while left is less than right
	// check if arr[left] + arr[right] = 0
	while(left < right){
		let sum = arr[left] + arr[right];
		if(sum === 0){
			return [arr[left], arr[right]];
		} else if (sum > 0){
			right--;
		} else {
			left++;
		}
	}
}
				  
console.log(sumZeroWhile([-4,-3,-2,-1,0,1,2,5]));