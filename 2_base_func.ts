const isBirthdayData: boolean = true;
const ageData: number = 42;
const userNameData: string = 'John';

function logBrtMsd(isBirthday: boolean, age: number, userName: string): string {
    if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
} else {
    return 'Error';
}
}

logBrtMsd(isBirthdayData, ageData, userNameData);
logBrtMsd(true, 18, 'Sarah');

