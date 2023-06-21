const message: string | number | boolean = 'Message';
const messages: (string | number)[] = ['dev', 25];
const messages2: any = ['dev', '25', true];

function printMessage(msg: string | number): void {
    console.log(msg);
}