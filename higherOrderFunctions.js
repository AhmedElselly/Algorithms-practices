function repeat(n, action){
	for(var i = 0; i < n; i++){
		action(i);
	}
}

function unless(test, then){
	if(!test) return then();
}

// // repeat(3, console.log);
// var arrOfNum = [];
// repeat(3, function(i){
// 	arrOfNum.push(i)
// });

// console.log(arrOfNum)

repeat(6, n => {
	unless(n % 2==1, () => {
		console.log(`${n} is even`)
	})
})

function greaterThan(n) {
	return function(m) {
		return m > n;
	}
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(9));

console.log('returning the min or max number in higher order function');

function min(f){
	return (...args) => {
		console.log('calling with', args);
		var result = f(...args);
		return result;
	}
}

var minimum = min(Math.min)(1,2,3,4);
var maximum = min(Math.max)(1,2,3,4);
console.log(minimum)
console.log(maximum)

