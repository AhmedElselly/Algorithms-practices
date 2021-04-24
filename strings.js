const str = "he's my king of this day till the last day";
var count = 0;
var pos = str.indexOf('a')
console.log(pos)
while(pos !== -1){
	count++;
	pos = str.indexOf('a', pos + 1);
}

console.log(count);