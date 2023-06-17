interface IUserData {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
}

const userDataInfo = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userParseObj: IUserData = JSON.parse(userDataInfo);

console.log(userParseObj);

const isNotOkay: boolean = true; //const isNotOkay: boolean
const isOkay = true; //const isOkay: true;
let movement: boolean | string = false;

if (isOkay) {
    movement = "movement";
}


const newArr = ['ssss', 5, true]; //const newArr: (string | number | boolean)[]