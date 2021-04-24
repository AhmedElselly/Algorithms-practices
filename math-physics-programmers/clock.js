function clock(oldHours, oldMinutes, addHours, addMinutes){
	let newMinutes = oldMinutes + addMinutes;
	while(newMinutes > 60){
		newMinutes-=60;
		addHours++;
	}
	let newHours = oldHours + addHours;
	while(newHours > 12){
		newHours-=12;
	}
	return `${newHours}:${newMinutes}`;
}

console.log(clock(8, 0, 6, 0));