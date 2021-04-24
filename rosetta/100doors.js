function getFinalOpenedDoors(numDoors){
	var array = [];
	numDoors.map((door, index) => {
		if(index % 2 === 0){
			let trueDoors = door[index] = true;
			array.push(trueDoors)
		}
	});

	return array;
}

const arr = Array(100).fill(false);

console.log(getFinalOpenedDoors(arr))