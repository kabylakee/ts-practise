const fetchNewData = (url: string, method: "GET" | "POST"): void => {
    console.log("Fetched", method);
}

const reqOptions = {
    url: 'https://someurl.com',
    // method: "GET" as "GET", // 2 variant
    method: "GET",
// } as const; // 3 variant
};

const method = 'GET'; //const method: "GET"
fetchNewData('qqq', "GET");
fetchNewData(reqOptions.url, reqOptions.method as "GET"); // 1 variant 
// fetchNewData(reqOptions.url, <"GET">reqOptions.method); // 4 variant

const box = document.querySelector(".box") as HTMLElement;
const input = <HTMLInputElement>document.querySelector("input");

// const someNumber = input.value as any as number;
// const someNumber: number = +input.value;

// let a = 'value' as const;
// let b = {f: 100} as const;
// let c = [] as const;
// let T9 = a as const; //Error
// let a = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; //Error
