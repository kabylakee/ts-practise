class BoxPost {
    width: number;
    height: number = 500;
    volume!: number | undefined;
    _content: string | undefined;

    constructor(width: number, volume?: number, content?: string) {
        this.width = width;
        this.volume = volume;
        this._content = content;
        // this.height = 500;
    }

    calculateVolume(): void {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Объем посылки: ${this.volume}`);
        } else {
            console.log(`Объем посылки: ${this.volume}`);
        }
    }

    checkBoxSize(transport: number): string;
    checkBoxSize(transport: number[]): string;
    checkBoxSize(transport: number | number[]): string {
        if (typeof transport === 'number') {
            return transport >= this.width ? 'Ok' : 'Not Ok';
        } else {
            return transport.some(t => t >= this.width) ? 'Ok' : 'No Ok';
        } 
    }

    get content() {
        return this._content;
    }

    set content(value: string | undefined) {
        this._content = `Date: ${new Date().toTimeString()}, content: ${value}`;
    }

    async contentBox(value: string) {
        const date = await new Date().toTimeString();
        this._content = `Date: ${date}, content: ${value}`;
    }
}

const secondBox = new BoxPost(250);
// console.log(secondBox.calculateVolume());
// console.log(secondBox.checkBoxSize([34, 780, 76]));
console.log(secondBox.content = 'Test');
console.log(secondBox.content);

