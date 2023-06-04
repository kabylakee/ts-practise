interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
}

abstract class AbstractEngine {
    model!: string;
    capacity!: number;
    abstract startEngine: (time: Date) => string;
    stopEngine(time: Date): string {
        this.startEngine(new Date());
        return "Engine stopped!";
    }
}

// new AbstractEngine() //Cannot create an instance of an abstract class

class VehicleEngine extends AbstractEngine {
    
    startEngine = (time: Date) => {
        return "Started";
    };   
}

console.log(new VehicleEngine().stopEngine(new Date()));