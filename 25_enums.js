var TOP = 'Top'; //мнимые константы
var RIGHT = 'Right'; //мнимые константы
var ETimingFunc;
(function (ETimingFunc) {
    ETimingFunc["EASE"] = "ease";
    ETimingFunc["EASE_IN"] = "ease-in";
    ETimingFunc["LINEAR"] = "linear";
})(ETimingFunc || (ETimingFunc = {}));
var ETimingFuncN;
(function (ETimingFuncN) {
    ETimingFuncN[ETimingFuncN["EASE"] = 1] = "EASE";
    ETimingFuncN[ETimingFuncN["EASE_IN"] = 2] = "EASE_IN";
    ETimingFuncN[ETimingFuncN["LINEAR"] = 2] = "LINEAR";
})(ETimingFuncN || (ETimingFuncN = {}));
function frame(elem, direction, tFunc) {
    if (direction === "right" /* EDirections.RIGHT */) {
        console.log(tFunc);
    }
}
frame('id', "right" /* EDirections.RIGHT */, ETimingFunc.EASE_IN);
