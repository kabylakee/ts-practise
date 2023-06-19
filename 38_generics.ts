function processingData<T, S> (data: T, options: S): string {
    switch(typeof data) {
        case "string": 
           return `${data}, speed: ${options}`;
           break;
        case "number":
            return `${data.toFixed()}, speed: ${options}`;
            break;
        default:
            return "Not valid";
    }
}

const re1 = processingData(1, 'fast');
const re2 = processingData("1", 'sloq');
const re3 = processingData<number, string>(10, 'slow');

console.log(re1, re2, re3)


interface PrintUK {
    design: number;
}

interface PrintUS {
    design: string;
}

interface Print<T> {
    design: T;
}

const somePrintNum: Print<string> = {
    design: 'ten',
}

const somePrintStr: Print<number> = {
    design: 25,
}

//////////////////
interface DataServer {
    // processing: <T>(data: T) => T0;
    // processing: typeof processing;
    processing: ProcessingFn;
}

interface ProcessingFn {
    <T>(data: T): T;
}

const saver: DataServer = {
    // processing(data) {
    //     return data
    // }

    processing: <T>(data: T) => {
        return data;
    }

    //  processing: (data) => {
    //     return data;
    // }

    // processing: processing;
}

function processing<T>(data: T): T {
    return data;
}

let newFunc: <T>(data: T) => T = processing;