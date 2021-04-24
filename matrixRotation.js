var matrix = [
	[1,0,1],
	[0,0,1],
	[1,1,1]
]


function rotateMatrix90Left(mat){
	var N = mat.length;
	for(var x = 0; x < N / 2; x++){
		// console.log(mat[x])
		// for(var j = )
		for(var y = x; y < N - x - 1; y++){
			// console.log(mat[x][y])
			var temp = mat[x][y];
			mat[x][y] = mat[y][N - 1 - x];
			console.log(mat[x][y])			
		}
	}
}

console.log(rotateMatrix90Left(matrix));
console.log(matrix)