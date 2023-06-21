class Style {
    [key: string]: string | ((str: string) => boolean);

    method(str: string): boolean {
        return true;
    }
}

const style = new Style();
style.color = 'red';
style.font = 'roboto';

console.log(style);