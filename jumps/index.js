const jumps = (x1, v1, x2, v2) => {
    if((x1 + v1) === (x2 + v2)){
        return true;
    }
    return false;
}

console.log(jumps(2,1,1,2));
console.log(jumps(0,3,4,2));
console.log(jumps(0,2,5,3));