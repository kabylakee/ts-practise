import fetch from 'cross-fetch';

const jsonTest = '{"name": "Test", "data": 4}';

interface JSONTest {
    name: string;
    data: number;
};

const objFromJson: JSONTest = JSON.parse(jsonTest);

let toDoList: ToDo[] = []; 


interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(responce => responce.json())
//     .then((json) => {
//         if ('id' in json) {
//             toDoList.push(json);
//         }
//         console.log(toDoList);
// });

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((responce) => responce.json())
    .then((json: any) => {
        if ('id' in json) {
            toDoList.push(json);
        } else if (Array.isArray(json)) {
            toDoList = json;
        } else {
            console.log(json);
        }
        // console.log(toDoList);
});

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

const promise = new Promise<string>((resolve, reject) => {
    resolve("Test");
});

promise.then(value => {
    console.log(value);
})