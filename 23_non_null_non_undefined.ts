interface IPersonUser {
    login: string;
    password: string;
    age: number;
    address?: string;
    parens?: {
        mother?: string,
        father?: string,
    }
}

const user2: IPersonUser = {
    login: 'first',
    password: 'qwerty',
    age: 50,
}

let dbName2: string;
sendPersonUserData(user2, '457687');

console.log(dbName2!);

function sendPersonUserData(obj: IPersonUser, db?: string): void {
    dbName2 = '235254';
    console.log(obj.parens?.father?.toLocaleLowerCase(), db!.toLocaleLowerCase())
}
