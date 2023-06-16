type StringNumberPair = [string, number];
let arr: StringNumberPair = ['str', 42];
arr.push(42);
// arr[2] = 'nuts';
console.log(arr);

const tuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna'];
const res = tuple.map(t => `${t} - data`);
const [bthd, usrAge, usrName] = tuple;