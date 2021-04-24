function fibonacci(n){
	var arrofNum = [];
	// looping from the n to 1 
	for(var i = n; i > 0; i--){

		arrofNum.push(n--); // if n = 10 the arrofNum = [1,2,3,4]

	}
	// console.log(arrofNum)
	// var anotherArr = arrofNum.splice(arrofNum.length - 1)
	// console.log(anotherArr)
	var test = arrofNum.reverse();
	for(var i = 0; i < test.length; i++){
		for(var j = 0; j < test.length; j++){
			console.log(test[i], test[j])
		}
	}
	
}

fibonacci(10);