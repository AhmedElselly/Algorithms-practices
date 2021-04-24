// function twoSums(nums, target){
// 	const previousValue = {};
// 	for(let i = 0; i < nums.length; i++){
// 		var current = nums[i];
// 		var neededValue = target - current;
// 		console.log(current, neededValue);
// 		var index2 = previousValue[neededValue];
// 		console.log(previousValue)
// 		if(index2 != null){
// 			return [index2, i];
// 		} else {
// 			previousValue[current] = i; 
// 		}
// 	}
// }

function twoSums(nums, target){
	var hash = {};
	for(var i = 0; i < nums.length; i++){
		var current = nums[i]
		var neededValue = target - current;
		var index2 = hash[neededValue];

		if(index2 != null){
			return [index2, i];
		} else {
			hash[current] = i;
		}
	}
}


console.log(twoSums([2,7,11,15], 9));