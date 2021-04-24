// function countDown(num){
// 	if(num === 0 ){
// 		console.log('all done')
// 		return;
// 	}
// 	console.log(num);
// 	num--;
// 	return countDown(num);
// }

// countDown(5)

// function sumRound(num){
// 	if(num === 1) return 1;
// 	console.log(num)
// 	return num + sumRound(num - 1);
// }

// console.log(sumRound(5));

// function factorial(n){
// 	var count = 1;
// 	for(var i = n; i > 0; i--){
// 		count *= i;
// 	}

// 	return (count);
// }

// console.log(factorial(4))

function factorialRecurssively(n){
	if(n === 1) return 1;
	return n * factorialRecurssively(n - 1);
}

console.log(factorialRecurssively(4))