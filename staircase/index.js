const staircase = num => {
    let string = '';
    for(let i = 0; i < num; i++){
        string += '#';
        console.log(string)
    }
    
}

console.log(staircase(6));