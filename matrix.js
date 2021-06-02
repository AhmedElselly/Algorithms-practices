const matrix = (rows, cols) => {
	let jaggedArray = new Array(rows);
	for(var i = 0; i < cols; i++){
		jaggedArray[i] = new Array(rows);
	}
	return jaggedArray;
}

console.log(matrix(3, 3))