let msg: 'Hello' = 'Hello';
msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server strted' {
    if (port === port3000 || port === port3001) {
        console.log(`Serever started on ${protocol}://serevr:${port}`);
    } else {
        console.error('Invalid port');
    }
    return 'Server strted';
}

startServer('https', 3001);


function createAnimation(
    id: string | number, 
    animaName: string, 
    timingFunct: 'ease' | 'ease-out' | 'ease-in' = 'ease', 
    duration: number, 
    iterCount: 'infinite' | number): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;

    // if (elem) {
        console.log(`${animaName} ${timingFunct} ${duration} ${iterCount}`);
    //     elem.style.animation = `${animaName} ${timingFunct} ${duration} ${iterCount}`;
    // }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

type AxisX = "top" | "bottom";
type AxisY = "left" | "right";
type Sides = `${AxisX}-${AxisY}`;


const KEY: unique symbol = Symbol.for('key');
const OTHER_KEY: unique symbol = Symbol.for('key');

// if (KEY === OTHER_KEY) {
  // Ошибка, unique symbol не равно unique symbol
// }

function f(key: typeof KEY): typeof KEY {
  return key;
}

let key = KEY; // let key: symbol; // symbol !== unique symbol

// f(key); // Error