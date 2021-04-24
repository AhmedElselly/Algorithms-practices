const SCRIPTS = require('./scripts');

function charScript(code){
	for(let script of SCRIPTS){
		if(script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})){
			return script
		}
		// return script
	}
	return null
}

console.log(charScript(121))