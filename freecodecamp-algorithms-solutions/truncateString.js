function truncateString(str, num){
	var dots = '...';
	var result = str.substring(0,num)
	if(num >= str.length){
		return result;
	} else {
		result+=dots;	
	}
	
	return result;
}

// var word = "slider";
// var part = word.substring(0,2); // sl
// console.log(part)
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 'A-tisket a-tasket A green and yellow basket'.length + 2));