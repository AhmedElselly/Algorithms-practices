function getId(obj){
	return obj.id;
}

console.log(getId({
	get id(){
		return Math.random();
	}
}))