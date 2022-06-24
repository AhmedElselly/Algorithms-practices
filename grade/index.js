const grade = n => {
    if(n >= 38){
        if((n + 2) % 5 === 0){
            return n + 2;
        }else {
            return n;
        }
    }
    return n;
}

console.log(grade(4))
console.log(grade(73))
console.log(grade(67))
console.log(grade(38))
console.log(grade(33))