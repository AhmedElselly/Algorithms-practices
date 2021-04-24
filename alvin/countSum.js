const checkSum = (target, numbers, memo={}) => {
	if(target in memo) return memo[target];
	if(target === 0) return true;
	if(target < 0) return false;

	for(let num of numbers){
		let remainder = target - num;
		if(checkSum(remainder, numbers, memo) === true){
			memo[target] = true;
			return true;
		}
	}
	memo[target] = false;
	return false;
}

console.log(checkSum(7, [5, 3, 4, 7]));
console.log(checkSum(7, [2, 3]));
console.log(checkSum(7, [2, 4]));
console.log(checkSum(300, [7, 14]));