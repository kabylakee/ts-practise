interface CarrCurrencies {
    usa: 'usd';
    china: "cny";
    ukraine: 'uah';
    kz: 'tenge';
};

type CarrCustomCurrencies<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
}

type CstmCurrencies = CarrCustomCurrencies<CarrCurrencies>;
// type CstmCurrencies = {
//     fade: string;
//     swipe: string;
// }

type MyAnimation = "fade" | 'swipe';
type Directions = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Directions>}`;