
//NEVER - errors
function fn(message: string): never {
    throw new Error(message);
}

//NEVER - loops
const loopFunction = (): never => {
    while(true) {

    }
}

//NEVER
function conditionX(x: string|number) {
    if (typeof x === 'string') {
        console.log(x); //type string
    } else if (typeof x === 'number') {
        console.log(x); //type number
    } else {
        return x; //type never
    }
}