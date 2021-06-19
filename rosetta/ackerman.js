const ackermann = (m, n) => {
	// if(m === 0) n+1;
	// if(m > 0 && n==0) ack(m - 1, 1);
	// if(m > 0 && n > 0) ack(m - 1, ack(m, n - 1))
	return m === 0 ? n + 1 : ackermann(m - 1, n === 0 ? 1 : ackermann(m, n - 1));
}

console.log(ackermann(5, 5))