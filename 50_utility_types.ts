//Utility types: Pick, Omit, Extract, Exclude, Record

interface TestCurrencies {
    usa: 'usd';
    china: "cny";
    ukraine: 'uah';
    kz: 'tenge';
};

//Omit
type CurrWithoutUSA = Omit<TestCurrencies, 'usa'>; //исключение свойств
// interface CarrCurrencies {
//     usa: 'usd';
//     china: "cny";
//     ukraine: 'uah';
//     kz: 'tenge';
// };

//Pick
type CurrUSAAndUkraine = Pick<TestCurrencies, 'usa' | 'ukraine'>; //фильтрация по свойству/ам
// type CurrUSAAndUkraine = {
//     usa: 'usd';
//     ukraine: 'uah';
// }

//Exclude
type CurrExcludeUSA = Exclude<keyof TestCurrencies, "usa">; //удаление из union type
// type CurrExcludeUSA = "china" | "ukraine" | "kz"

//Extract
type CurrExtractChina = Extract<TestCurrencies | CurrExcludeUSA, "china">; //выбор подходящего типа
// type CurrExtractChina = "china"


//Record
type PlayersGames = "Alex" | "John";
type PlayersWithCounties = Record<PlayersGames, TestCurrencies>; //формирование новой структуры: ключ-значение
// type PlayersWithCounties = {
//     Alex: TestCurrencies;
//     John: TestCurrencies;
// }


type MyCurrAnimation = "fade" | 'swipe';
type CurrDirections = "in" | "out";
type FadeType = Exclude<MyCurrAnimation, "swipe"> //удаление из union type
type SwipeType = Extract<MyCurrAnimation | Directions, "swipe">; //выбор подходящего типа
type MyDefaultAnimation = `${MyAnimation}${Capitalize<Directions>}`;