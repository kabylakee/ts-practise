interface ComplexVehicle {
    name: 'car' | 'ship' | 'airplane';
    engine: string;
    wheels?: number;
    sail?: string;
    wings?: string;
}

const miniCar: ComplexVehicle = {
    name: 'car',
    engine: 'V8'
}

function repairVehicleItem(vehicle: ComplexVehicle): void {
    switch(vehicle.name){
        case 'car': 
          console.log(vehicle.wheels! * 2);
          break;
        case 'ship': 
          console.log(vehicle.sail);
          break;
        case 'airplane': 
          console.log(vehicle.wings);
          break;
        default:
        //   const smth: never = vehicle; 
          console.log(vehicle); //never
    }
}

// repairVehicleItem(miniCar);