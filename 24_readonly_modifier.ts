interface INewUser {
    readonly login: string;
    password: string;
    age: number;
    address?: string;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const newUser: INewUser = {
    login: 'login',
    password: '123456',
    age: 23,
    address: 'Pritytskogo 42',
    parents: {
        mother: 'Kate',
        father: 'John',
    }
}

// newUser.login = '1234r'; // Cannot assign to 'login' because it is a read-only property
newUser.password = '1234r'; //OK

const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5; //Index signature in type 'readonly number[]' only permits reading
// basicPorts.push(564); //Property 'push' does not exist on type 'readonly number[]'

const newPorts: readonly [number, ...string[]] = [3000, '5555', '30001'];
// newPorts[0] = 36; //Cannot assign to '0' because it is a read-only property

const userFreeze: Readonly<INewUser>= {
    login: 'login',
    password: '123456',
    age: 23,
}

// userFreeze.age = 2345; //Cannot assign to 'age' because it is a read-only property

const avaliablePorts: ReadonlyArray <number> = [3000, 2334, 4455];
// avaliablePorts[0] = 5; //Index signature in type 'readonly number[]' only permits reading