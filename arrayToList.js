function arrToList(arr){
	var list = {};
	for(var i = 0; i < arr.length; i++){
		var index = `index[${i}]`;
		list[index] = Object.assign({value: arr[i]});
	}
	return list;
}

console.log(arrToList([10,22,33,44,55]));