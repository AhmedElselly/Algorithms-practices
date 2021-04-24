let re1 = new RegExp('abc');
let re2 = /abc/;
// console.log(re2);

// console.log(/abc/.test('abxde'));
// console.log(/[0-9]/.test('in 1992'));

// MATCHING DATE TIME
// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

// console.log(dateTime.test('01-12-1992 15:30'));

// console.log(/'\d+'/.test("'123'"))
// console.log(/'\d+'/.test("''"))
// console.log(/'\d*'/.test("''"))
// console.log(/'\d*'/.test("'123'"))

let neigbour = /neigbou?r/;
console.log(neigbour.test('neigbour'))
console.log(neigbour.test('neigbor'))