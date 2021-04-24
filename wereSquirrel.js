// let day1 = {
// 	squirrel: false,
// 	events: ['work', 'touched tree', 'pizza', 'running']
// }

let journal = [
	{events: ['work', 'touched tree', 'pizza', 'running', 'television'],
	squirrel: false
	},
	{events: ['work', 'icecream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
	squirrel: false
	},
	{events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
	squirrel: true
	},
]


// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: 10};

// console.log(object1 === object2);
// console.log(object1 === object3);

// var journal = [];

function addEntry(events, squirrel){
	journal.push({events, squirrel});
}

// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false)
// console.log(journal);

function tableFor(event, journal){
	let table = [0,0,0,0];
	for(var i = 0; i < journal.length; i++){
		let entry = journal[i], index = 0;
		console.log(entry)
		if(entry.events.includes(event)) index += 1;
		if(entry.squirrel) index += 2;
		table[index] += 1;

	}
	return table;
}

console.log(tableFor('pizza', journal));