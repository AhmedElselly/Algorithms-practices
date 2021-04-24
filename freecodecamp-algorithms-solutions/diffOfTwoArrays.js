function diffArr(arr1, arr2){
	var newArr = [];
	var oldArr = [];
	
	function onlyInFirst(first, second){
		for(var i = 0; i < first.length; i++){
			if(second.indexOf(first[i]) === -1){
				newArr.push(first[i]);
			}
		}
	}
	
	onlyInFirst(arr1, arr2);
	onlyInFirst(arr2, arr1);
	return newArr;
}

// console.log(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArr(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArr(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArr([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));