const TOP = 'Top'; //мнимые константы
const RIGHT = 'Right'; //мнимые константы

const enum EDirections {
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    BOTTOM = 'bottom'
}

enum ETimingFunc {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear'
}

enum ETimingFuncN {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = EASE * 2
}

function frame(elem: string, direction: EDirections, tFunc: ETimingFunc): void {
    if (direction === EDirections.RIGHT) {
        console.log(tFunc);
    }
}

frame('id', EDirections.RIGHT, ETimingFunc.EASE_IN);