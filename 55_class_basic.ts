class Box {
    width!: number;
    height: number;
    volume!: string;

    constructor(volume: string)
    constructor(width: number)
    constructor(widthOrVolume: number | string) {
        // super();
        if (typeof widthOrVolume === 'number') {
            this.width = widthOrVolume;
        } else {
            this.volume = widthOrVolume;
        }
        this.height = 500;
    }
}

const firstBox = new Box(500);

console.log(firstBox);

class UserNext {
    name!: string;
}

const vanya = new UserNext();
vanya.name = 'Vanya';
console.log(vanya);