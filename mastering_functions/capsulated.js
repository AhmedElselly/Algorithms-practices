const first = (function(init=0){
	var count = init;
	return function(){
		count++;
		return count;
	}
})(2);


console.log(first())