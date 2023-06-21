let smth: unknown;
smth = ['str', 'str', 'str'];
// let dataString: string[] = smth; //Error
// dataString.find(e => e);


const someValue: unknown = 10;
// someValue.method(); //Error

function fetchData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
    }
}

const dataForParse = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParse (s: string): unknown {
    return JSON.parse(s);
}

const resultData = safeParse(dataForParse);
console.log(resultData);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(d);
    } else {
        console.error("Some error");
    }
}

transferData(dataForParse);

try {
    if (1) {
        throw new Error('error');
    } 
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else if (typeof e === 'string') {
        console.log(e);
    }
}

type T0 = any & unknown; // type T0 = any
type T1 = number & unknown; // type T1 = number
type T2<T> = T & unknown; // type T2 = T
type T3 = unknown & unknown; // type T3 = unknown

type T4 = any | unknown; // type T4 = any
type T5 = null | unknown; // type T5 = unknown
type T6 = boolean | unknown; // type T6 = unknown
type T7<T> = T | unknown; // type T7 = unknown

/////////////////////////////////
class TypeSystem5 {
  static unknown: unknown;

  static any: any = TypeSystem5.unknown; // Ok
//   static number: number = TypeSystem5.unknown; // Error
//   static string: string = TypeSystem5.unknown; // Error
//   static boolean: boolean = TypeSystem5.unknown; // Error
//   static null: null = TypeSystem5.unknown; // Error
//   static undefined: undefined = TypeSystem5.unknown; // Error
//   static void: void = TypeSystem5.unknown; // Error
//   static never: never = TypeSystem5.unknown; // Error
}

TypeSystem5.unknown = TypeSystem5.any; // Ok
// TypeSystem5.unknown = TypeSystem5.number; // Ok
// TypeSystem5.unknown = TypeSystem5.string; // Ok
// TypeSystem5.unknown = TypeSystem5.boolean; // Ok
// TypeSystem5.unknown = TypeSystem5.null; // Ok
// TypeSystem5.unknown = TypeSystem5.undefined; // Ok
// TypeSystem5.unknown = TypeSystem5.void; // Ok
TypeSystem5.unknown = TypeSystem5.unknown; // Ok


