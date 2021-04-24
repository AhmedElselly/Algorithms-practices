function addFractions(f1, f2){
	var num1,den1,num2,den2,num3,num4;
	num1 = f1.split('/');
	const letsee = f1.split('/');

	f1 = Number(num1[0])/Number(num1[1]);
	f2 = num2/den2;
	console.log(f1)
	if(den1 == den2){
		return num1 + num2 / den1
	} else {
		num3 = num1 * den2;
		num4 = num2 * den1;
		return num3 + num4 / den1 * den2;
	}
}

console.log(addFractions('1/3', '1/2'))