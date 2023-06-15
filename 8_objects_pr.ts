const userFormData = {
    isBirthdayData: true,
    ageData: 42,
    userNameData: 'John',
    messages: {
        error: 'Error',
    }
}

console.log(userFormData);

// function logBrtMessage(data: {
//     isBirthdayData: boolean,
//     ageData: number,
//     userNameData: string
// }): string {
//     if (data.isBirthdayData) {
//     return `Congrats ${data.userNameData.toUpperCase()}, age: ${data.ageData + 1}`;
// } else {
//     return 'Error';
// }
// }


function logBrtMessage({isBirthdayData, ageData, userNameData, messages: {error}}: {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string,
    messages: {
        error: string,
    }
}): string {
    if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
} else {
    return 'Error';
}
}

console.log(logBrtMessage(userFormData));