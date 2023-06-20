interface ICompany {
    name: string;
    debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'name';

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
    name: 'HH',
    debts: 50000,
}

const google = {
    name: 'Google',
    open: 'open',
}

printDebts(hh, 'name', 'debts');
printDebts(google, 'name', 'open');

/////////////////
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; //type M = string | number

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; //type A = number
