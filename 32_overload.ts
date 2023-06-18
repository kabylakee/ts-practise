// 32_overload.ts

interface Square {
    side: number;
    area: number;
}

interface Rect {
    a: number;
    b: number;
    area: number;
}

function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;
function calculateArea (a: number, b?: number): Square | Rect {
    if (b) {
        const rect: Rect = {
            a, b,
            area: a * b,
        }
        return rect;
    } else {
        const square: Square = {
            side: a,
            area: a * a,
        }
        return square;
    }
}

console.log(calculateArea(8)); //function calculateArea(side: number): Square (+1 overload)
console.log(calculateArea(4, 5)); //function calculateArea(a: number, b: number): Rect (+1 overload)