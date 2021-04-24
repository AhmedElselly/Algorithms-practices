var M = [
	[1,2,3,4,5],
	[6,7,8,9,10],
	[11,12,13,14,15],
	[16,17,18,19,20]
] 

function spiralPrint(M){
	var topRow = 0;
	var leftCol = 0;
	var btmRow = M.length - 1;
	var rightCol = M[0].length - 1;

	// console.log(topRow, leftCol, btmRow, rightCol)
	console.log(topRow)
	while(topRow < btmRow && leftCol < rightCol){
		for(var col = 0; col <= rightCol; col++){
			console.log(M[topRow][col]);
		}
		topRow++;

	}
}


console.log(spiralPrint(M));