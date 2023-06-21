interface Currencies {
    usa: 'usd';
    china: "cny";
    ukraine: 'uah';
    kz: 'tenge';
};

type CreateCustomCurrencies<T> = {
    readonly [P in keyof T]+?: string;
}

type CustomCurrencies = CreateCustomCurrencies<Currencies>;
// type CustomCurrencies = {
//     usa: string;
//     china: string;
//     ukraine: string;
//     kz: string;
// };

// type СопостовимыйТип = {
//     [ПроизвольныйИдентификатор in Множество]: ПроизвольныйТипДанных; 
// }

type Keys = 'name' | 'age' | 'role';

type UserDataKeys = {
    [K in Keys]: string;
};

const alexNew: UserDataKeys = {
    name: 'Alex',
    age: '34',
    role: 'admin'
}