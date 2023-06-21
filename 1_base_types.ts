
//string
let userName1: string = 'Ivan';
let userName2: String = new String('John');

//number
let num1: number = 5;
let num2: Number = new Number(5);

// v1=v2; //Error
num2=num1; //OK


//bolean
let isFlag1: boolean = true;
let isFlag2: Boolean = true;


const isBirthday: boolean = true;
const age: number = 42;
const userName: string = 'John';

if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
}