const countOpenedDoors = num => {
	let openedDoors = [];
	let doors = [];
	// make an array of doors
	for(var i = 0; i < num; i++){
		doors[i] = {id: i + 1, isOpen: false};
	}
	// loop on doors in even numbers and toggle it
	for(var i = 1; i <= doors.length; i++){
		for(var j = 0; j < doors.length; j++){
			if(doors[j].id % i === 0){
				doors[j].isOpen = !doors[j].isOpen;
			}
		}
	}

	for(var i = 0; i < doors.length; i++){
		if(doors[i].isOpen){
			openedDoors.push(doors[i].id);
		}
	}

	return openedDoors;
}

console.log(countOpenedDoors(100));