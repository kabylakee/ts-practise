const departmens: string[] = ['dev', 'design', 'marketing'];
const department: string = departmens[0];
departmens.push('FE');

const report = departmens.filter((d: string) => d !== 'dev').map((d: string) => `${d} - done`);
const [first] = report;

console.log(report);
console.log(first);

const nums: number[] = [1, 2, 3, 4, 6];
// nums.push(undefined);
// nums.push(null);

const matrix: number[][] = [[1, 2, 3], [2, 4, 5]];