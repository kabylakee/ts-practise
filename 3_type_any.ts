//Variable any
let apple: any = 0;
apple = 'red';

//noImplicityAny

//any JSON.parse

const userData = '{"isBirthdayData": "true", "ageData": "20", "userNameData": "Sarah"}';
const userObj: {
    isBirthdayData: boolean, 
    ageData: number, 
    userNameData: string
} = JSON.parse(userData);

console.log(userObj)