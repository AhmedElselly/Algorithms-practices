const loan = (p) => {
	let result = [];
	let balance = p;
	let i = 0.05 / 12;

	let monthlyPayment = (i*p) / (1 - Math.pow(1+i, -24))
	let month = 1;
	while(month < 24){
		monthInterest = i * balance;
		monthPrinciple = monthlyPayment - monthInterest;
		balance -= monthPrinciple;
		month++;
		result.push({month, monthInterest, monthPrinciple, balance})
	}
	return result;
}

console.log(loan(1000));