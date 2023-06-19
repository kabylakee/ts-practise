//41_generic_classes.ts

class NewUser <T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== 'string') {
            return `I have only name: ${this.name}`;
        } else {
            return `${this.name} ${surname}`;
        }
    }
}

// class AdminUser<T> extends NewUser<string, number> {
//     rules: T;
//     constructor(rules: T) {
//         this.rules = rules;
//     }
// }

const ivan = new NewUser("Ivan", 30);
console.log(ivan.sayMyFullName('Smith'));

const nameData = 'Alex';
const ageData2 = 54;
const alex = new NewUser<string, number>(nameData, ageData2);
