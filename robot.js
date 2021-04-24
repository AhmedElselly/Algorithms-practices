const roads = [
	"Alice's house-bob's house",
	"Alice's house-cabin",
	"Alice's house-post office",
	"Bob's house-town tall",
	"Alice's house-bob's house",
]

function buildGraph(edges){
	let graph = Object.create(null);
	// console.log(graph);
	function addEdge(from, to){
		if(graph[from] == null){
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}
	for(let [from, to] of edges.map(r => r.split('-'))){
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

var roadGraph = buildGraph(roads);
console.log(roadGraph['Post Office'])

class VillageState{
	constructor(place, parcels){
		this.place = place;
		this.parcels = parcels;
	}

	move(destination){
		// console.log(roadGraph[this.place])
		console.log(this.place)
		if(!roadGraph[this.place].includes(destination)){
			return this;
		} else {
			let parcels = this.parcels.map(p => {
				if(p.place != this.place) return p;
				return {place: destination, address: p.address};
			}).filter(p => p.place != p.address);
			console.log(parcels)
			return new VillageState(destination, parcels)
		}
	}
}

var first = new VillageState('Post Office', [{place: 'Post Office', address: "Alice's House"}]);
var next = first.move("Alice's House");
console.log(next.place)