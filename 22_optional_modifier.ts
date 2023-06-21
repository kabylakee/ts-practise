interface IUser {
    login: string;
    password: string;
    age: number;
    address?: string;
    // address: string | undefined;
    parens?: {
        mother?: string,
        father?: string,
    }
}

const user: IUser = {
    login: 'first',
    password: 'qwerty',
    age: 50,
}

const dbName = '12345';

function sendUserData(obj: IUser, db?: string): void {
    console.log(obj.parens?.father?.toLocaleLowerCase(), db?.toLocaleLowerCase())
}