const Queue = require('./queues')


function hotPotato(elementsList, num){
	const queue = new Queue();
	const elimitatedList = [];

	for(let i = 0; i < elementsList.length; i++){
		queue.enqueue(elementsList[i]);
	}
	console.log(queue.dequeue())

	while(queue.size() > 1){
		for(var i = 0; i < num; i++){
			queue.enqueue(queue.dequeue());
		}
		elimitatedList.push(queue.dequeue());
	}

	return {
		elimitated: elimitatedList,
		winner: queue.dequeue()
	}
}


console.log(hotPotato(['Ahmed', 'Elena', 'Sandra', 'Dara', 'Kris'], 7))