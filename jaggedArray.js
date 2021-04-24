function Matrix(rows, col){
	var jagged = new Array(rows);
	for(var i = 0; i < col; i++){
		jagged[i] = new Array(rows);
	}

	return jagged;
}

console.log(Matrix(3,3));
console.log(Matrix([1,2,3],[4,5,6], [7,8,9]));