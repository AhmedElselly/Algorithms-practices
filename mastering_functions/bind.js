function ShowItSelf(id){
	this.id = id;
	var that = this;
	setTimeout(function(){
		console.log(that.id);
	}, 1000);
}


var x = new ShowItSelf('username')

console.log(x)
