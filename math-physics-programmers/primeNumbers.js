function isPrime(n){
	for(var i = 2; i < n; i++){
		if(n % i === 0){
			return false
		}
	}
	return true;
}

function listOfPrimes(num){
	var arr = [2];
	for(var i = 3; i < num; i+=2){
		if(isPrime(i)){
			arr.push(i)
		}
	}
	return arr;
}

function primeFactors(n){
	var pList = listOfPrimes(Math.floor(n / 2));
	// console.log(pList)
	var rList = [];
	var index = 1;
	while(index <= pList.length){
		var prime = pList[index];
		if(n % prime === 0){
			n = n / prime;
			rList.push(prime);
		} else {
			index++;
		}
	}
	return rList;
}
