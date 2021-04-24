// var ages = {
// 	Ahmed: 27,
// 	Sina: 24,
// 	Joe: 54
// }


// console.log(`Ahmed is ${ages['Ahmed']}`);
// console.log('Is Ahmed ages is known?', 'Ahmed' in ages);
// console.log("Is toString's age known?", "toString" in ages);

var ages = new Map();

ages.set('Ahmed', 27)


console.log(`${ages.has('toString')}`)