type Animal = 'cat' | 'dog' | 'bird'

interface IAnimalData {
	animal: Animal,
	breed: string;
	sterilized?: string;
}

enum AnimalStatus {
	Available = 'available',
	NotAvailable = 'not available',
}

interface IAnimalAvailableResponce {
	status: AnimalStatus.Available;
	data: IAnimalAvailableData;
}

interface IAnimalNotAvailableResponce {
	status: AnimalStatus.NotAvailable,
	data: IAnimalNotAvailableData;
}

interface IAnimalNotAvailableData {
    message: string;
    nextUpdateIn: Date;
}

interface IAnimalAvailableData extends IAnimalData {
    location: string;
    age?: number;
}

type Responce = IAnimalAvailableResponce | IAnimalNotAvailableResponce;

function isAnimalExist(animal: Responce): animal is IAnimalAvailableResponce {
	if (animal.status === AnimalStatus.Available) {
		return true;
	} else return false;
}

function checkAnimalData(animal: Responce): string | IAnimalAvailableData {
	if (isAnimalExist(animal)) {
		return animal.data
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

const availableCat: IAnimalAvailableResponce = {
	status: AnimalStatus.Available, 
	data: {
		animal: 'cat',
		age: 3,
		breed: 'utf8',
		sterilized: 'no',
		location: 'Holland',
	}
}

const notAvailableCat: IAnimalNotAvailableResponce = {
	status: AnimalStatus.NotAvailable, 
	data: {
		message: 'No animal',
		nextUpdateIn: new Date(),
	}
}
console.log(checkAnimalData(notAvailableCat));
