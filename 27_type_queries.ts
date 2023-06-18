// 27_type_queries.ts

// interface IDataControl {
//     water: number;
//     el: number;
// }

const dataFromControl = {
    water: 200,
    el: 350,
};

function checkNewReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 350,
    }

    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    } else return false;
}

const PI = 3.14;
let PIClone: typeof PI;