// function isNumber (n: string[] | number | boolean): n is number { //:boolean
//     return typeof n === "number";
// }

function isNumber (n: unknown): n is number { //:boolean
    return typeof n === "number";
}

function printMSG(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m));
    } else if (isNumber(msg)) {
        console.log(msg);
    } else {
        console.log(msg);
    }
}
printMSG(4);

interface Car {
    name: 'car';
    engine: string;
    wheels: number;
}

interface Ship {
    name: 'ship';
    engine: string;
    sail: string;
}

interface Airplane {
    name: 'airplane';
    engine: string;
    wings: string;
}

type Vehicle = Car | Ship | Airplane;

function repairVehicle(vehicle: Vehicle): void {
    // if(isCar(vehicle)) { //vehicle: Car | Ship
    //     console.log(vehicle.wheels);
    // } else if (isShip(vehicle)) { //vehicle: Ship
    //     console.log(vehicle.sail);
    // } else {
    //     console.log(vehicle.wings); // vehicle: never
    // }

    switch(vehicle.name){
        case 'car': 
          console.log(vehicle.wheels);
          break;
        case 'ship': 
          console.log(vehicle.sail);
          break;
        case 'airplane': 
          console.log(vehicle.wings);
          break;
        default:
          const smth: never = vehicle; 
          console.log(vehicle); //never
    }
}

function isCar(car: Vehicle): car is Car {
    // return "wheels" in car;
    return (car as Car).wheels !== undefined;
}


function isShip(ship: Vehicle): ship is Ship {
    return "sail" in ship;
}

// repairVehicle({engine: '234kemnfk', sail: 'jcnejqed'});