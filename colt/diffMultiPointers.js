const diffMulti = (array, x) => {
		let arr = array.sort(function(a, b){
			return a - b;
		});
		console.log(arr)
	// left pointer to the first element of the array
	let left = 0;
	// right pointer to the right element of the array
	let right = arr.length - 1;
	// keep looping till both left and right difference equals to X
	while(left < right){
		let diff = arr[right] - arr[left];
		// tactic: 
		if(diff === x){
			// if both equal X return
			return [arr[left], arr[right]]; // [2, 80]
			// else if difference > x then right pointer reduce by 1
		} else if (diff > x){
			right--;
			// else (difference < x) then left pointer raise by 1
		} else {
			left++;
		}	
	}
}
//                     l                r = 
console.log(diffMulti([5, 10, 3, 2, 50, 80], 78));
console.log(diffMulti([ -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322 ], 369));
console.log(diffMulti([-10, 20], 30));
console.log(diffMulti([ -259, -825, 459, 825, 221, 870, 626, 934, 205, 783, 850, 398 ], -42));
