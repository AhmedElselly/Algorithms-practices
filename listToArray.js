var list = {
	index0: 1,
	index1: 2,
	index3: 4,
	index4: 5,
}

function listToArray(obj){
	for(var val in obj){
		var parsed = Object.keys(val);
		var newArr = [];
		for(var i = 0; i < parsed.length; i++){
			newArr.push(parseInt(parsed[i]));
		}
		return newArr;		
	}
}


console.log(listToArray(list));