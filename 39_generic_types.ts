type SmthNew<T> = T;
const number: SmthNew<number> = 5;

//generics constraints
interface User<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
}

interface ParentsOfUser {
    mother: string;
    father: string;
}

const simpleUser: User<{mother: string, father: string, married: boolean}> = {
    login: 'user',
    age: 54,
    parents: {
        mother: "Anna",
        father: "No data",
        married: true,
    }
}

//generic hepler type
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
const dataNumber: OneOrMany<number []> = [5];


const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
}

depositMoney(500);
depositMoney('500');