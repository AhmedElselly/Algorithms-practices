const gameArea = document.querySelector('.gameArea');
const body = document.querySelector('body');
// gameArea.style.display = 'flex'
const levels = [1,2,3,4,5];

// for(var i = 0; i < levels.length; i++){
// 	const box = document.createElement('div');
// 	box.classList.add('box')
// 	box.style.background = 'black';
// 	box.style.top = 100 + 'px';
// 	box.style.width = 100 + 'px';
// 	box.style.height = 100 + 'px';

// 	document.body.append(box);
// }

const level = `
...............
..#..........#.
..#.........=#.
..#...o.o....#.
..#.@..####..#.
..###........#.
....#++++++++#.
....##########.
...............
`

let rows = level.trim().split('\n').map(l => [...l])
console.log(rows);
let r = Math.floor(Math.random() * 10)
rows.map(char => {
	let arr = char;
	return arr.map((dot, i) => {
		if(dot === '#'){
			let square = document.createElement('div');
			square.style.backgroundColor = 'black';
			// square.style.position = 'absolute';
			square.classList.add('box')
			console.log(i)
			square.style.position = 'absolute'
			square.style.top = `${i * 10}px`;
			square.style.left = `${i * 10 * r}px`;
			square.style.width = `${10}px`;
			square.style.height = `${10}px`;
			gameArea.append(square)
		}
	})
})


console.log(gameArea)