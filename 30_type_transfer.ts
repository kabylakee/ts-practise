//30_type_transfer.ts

let numX: Number = new Number(5);
let numY: number = 5;
let numZ = Number(5); //let numZ: number

// numY = numX; //Type 'Number' is not assignable to type 'number'.
// numX = numY; //OK
console.log(numX == numY); //true
console.log(numX === numY); //false

const num = 5;
const strNum: string = num.toString();
const newStr = '5';
const numStr: number = +newStr;

const newDepartment: IDepartment = {
    name: 'web-dev',
    bugdet: 50000,
};

interface IProject {
    name: string;
    projectBudget: number; 
}

interface IDepartment {
    name: string;
    bugdet: number;
}

const lowNewDepartment: IProject = {
    ...newDepartment,
    projectBudget: 4666,
}
console.log(lowNewDepartment);

function transformDepartment(depart: IDepartment, amount: number): IProject {
    return {
        name: depart.name,
        projectBudget: amount,
    }
}

const newProject: IProject = transformDepartment(newDepartment, 4666);
console.log(newProject);