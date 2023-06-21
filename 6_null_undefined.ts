//Null
class TypeSystem {
  static any: any = null; // Ok
//   static number: number = null; // Ok strictNullChecks: false
//   static string: string = null; // Ok strictNullChecks: false
//   static boolean: boolean = null; // Ok strictNullChecks: false
  static null: null = null; // Ok
//   static undefined: undefined = null; // Ok strictNullChecks: false

  static undefined: undefined = undefined; // Ok
}

TypeSystem.null = TypeSystem.any; // Ok
// TypeSystem.null = TypeSystem.number; // Error
// TypeSystem.null = TypeSystem.string; // Error
// TypeSystem.null = TypeSystem.boolean; // Error
// TypeSystem.null = TypeSystem.undefined; // OK strictNullChecks: false


//Undefined
// class TypeSystem {
//   static any: any = undefined; // Ok
//   static number: number = undefined; // Ok strictNullChecks: false
//   static string: string = undefined; // Ok strictNullChecks: false
//   static boolean: boolean = undefined; // Ok strictNullChecks: false
//   static null: null = undefined; // Ok strictNullChecks: false
//   static undefined: undefined = undefined; // Ok
// }

TypeSystem.undefined = TypeSystem.any;


function getRndData() {
    if(Math.random() < 0.5) {
        return null;
    } else {
        return '   Some data  ';
    }
}

const data = getRndData();
const trimmedData = data ? data.trim() : null;

console.log(trimmedData);


//////////////////

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously();