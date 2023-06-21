//45_indexed_access_type.ts

interface INewCompany {
    name: string;
    debts: number;
    departments: IDepartmnet;
    managment: {
        owner: string;
    }
}

interface IDepartmnet {
    [key: string]: string;
}

const amaxon: INewCompany = {
    name: 'Amazon',
    debts: 50000,
    departments: {
        sales: 'sales',
        developer: 'dev',
    },
    managment: {
        owner: 'John',
    },
}

type CompanyDepartmentType = INewCompany['departments']; //type CompanyDepartmentType = IDepartmnet
type CompanyOwnerType = INewCompany['managment']['owner']; //type CompanyOwnerType = string
type CompanyDebtsType = INewCompany['debts']; //type CompanyDebtsType = number
type Test = INewCompany[keyof INewCompany]; //type Test = string | number | IDepartmnet | { owner: string;}