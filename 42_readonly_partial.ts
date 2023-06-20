// 42_readonly_partial.ts
const arr3: Array<number> = [1, 2, 3];
const arr4: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['wqdqe', 'dqwedqw', 'qwd'];
// roarr[0] = 'whatever'; //Index signature in type 'readonly string[]' only permits reading

interface IState {
    data: {
        name: string;
    },
    tag?: string,
}

const state: Partial<IState> = { //Partial
    data: {
        name: "John",
    },
}

const strictState: Required<IState> = { //Required
    data: {
        name: 'Sarah',
    },
    tag: 'tagging',
}

function action (state: Readonly<IState>) { //Readonly
    state.data.name = 'abc';
}