function printDebtsData<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const newGoogle = {
    name: 'Google',
    debts: 'open',
}

printDebtsData(newGoogle, 'name', 'debts');

type GoogleKeys = keyof typeof newGoogle;

const newKeys: GoogleKeys = 'name';