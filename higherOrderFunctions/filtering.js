const SCRIPTS = require('./scripts');
function filter(arr, test){
	let passed = [];
	for(var element of arr){
		if(test(element)){
			passed.push(element);
		}
	}
	return passed;
}

// console.log(filter([1,2,3,4], num => num !== 4));
console.log(filter(SCRIPTS, script => script.living));