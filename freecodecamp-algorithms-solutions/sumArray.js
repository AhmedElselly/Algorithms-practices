function sumArray(arr){
	var sortedArr = arr.sort((a, b) => {
		return a-b;
	});
	var total = 0;
	console.log(sortedArr[0])
	for(var i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++){
		// console.log(i)
		// console.log(count)
		// console.log(arr[i])
		total += i;
	}
	return total;
}

console.log(sumArray([5, 10])); // 10
// console.log(5+6+7+8+9+10)

// var arr = [1, 4];
// var total = 0
// // for(var i = 0; i >= 4; i--){
// // 	total+=arr[i]
// // }
// console.log(arr[arr.length - 1])
// for(var i = arr[0]; i <= arr[arr.length - 1]; i++){
// 	// console.log(i)
// 	total+=i
// }

// console.log(total)