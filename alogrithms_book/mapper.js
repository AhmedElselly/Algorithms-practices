function uniqID(){
	return Math.floor(Math.random() * 100);
}

function makeRecord(name){
	return {id: uniqID(), name};
}

function map(mapper, arr){
	var newList = [];
	for(let elem of arr){
		newList.push(mapper(elem));
	}
	return newList;
}

console.log(map(makeRecord, ['Ahmed', 'Elselly']))