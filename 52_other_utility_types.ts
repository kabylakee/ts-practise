function calculateNumbers(a: number, b: number): number {
    return a * b;
};

 //ReturnType
type CalculateRT = ReturnType<typeof calculateNumbers>; //type CalculateRT = number

//Parameters
type CalculatePT = Parameters<typeof calculateNumbers>; //type CalculatePT = [a: number, b: number]
type CalculatePT1 = Parameters<typeof calculateNumbers>[0]; //type CalculatePT1 = number
type PT1 = Parameters<(a: number) => number> //type PT1 = [a: number]
type PT2 = Parameters<<T>(arg: T) => T>; //type PT2 = [arg: unknown]

class ExampleClass {
    constructor(a: number) {}
}

//ConstructorParameters
type CT1 = ConstructorParameters<typeof ExampleClass>; //type CT1 = [a: number]



////////////////////////////////////////////
function calculate(a: number, b: number[]): number {
    return a * b[0];
}
type CalculatePT2 = Parameters<typeof calculate>[1];

type Smth = Awaited<boolean | Promise<number>>;

type T24 = ConstructorParameters<RegExpConstructor>;

type T14 = ConstructorParameters<FunctionConstructor>;

