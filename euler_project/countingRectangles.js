const arr = [
	[6,4,2],
	[3,2,1]
]

function countingRect(n, m){
	// const arr = Array.from(new Array(m), () => Array.from(new Array(n)));

	// let total = 0;
	// for(var i = 0; i < arr.length; i++){
	// 	for(var j = 0; j < arr[i].length; j++){
	// 		console.log(arr[i][j]);
	// 		total += arr[i][j];
	// 	}
	// }
	let total = (m * (m+1) * (n) * (n+1)) / 4;
	return total;
}

console.log(countingRect(3, 2));