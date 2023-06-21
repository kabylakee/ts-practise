type ClassType<T> = {
    [K in keyof T]: string | number;
};

interface IFitnessCenter {
	clubName: string;
    location: string;
    classes: IFintessClass[];
    futureClasses: IFutureClass[];
    currClients: ICurrClient[];
    exClients: IExClients[];
    futureClients: IFutureClients[];
};

interface IFintessClass {
	name: string;
	startsAt: string;
	duration: number;
}

interface IFutureClass extends Omit<IFintessClass, "startsAt"> {
	willStartsAt: string,
}

interface ICurrClient {
	name: string;
	age: string | number;
    gender: "male" | "female";
    timeLeft: string;
}

type ClientWithoutTime = Exclude<keyof ICurrClient, "timeLeft">;
// type OnlyName = Extract<keyof ICurrClient, "name">;

interface IExClients extends Pick<ICurrClient, ClientWithoutTime> {
	makeCallFor: Date;
}

interface IFutureClients extends Pick<ICurrClient, "name"> {
	makeCallFor: Date;
}

const fitnessClubCenter: IFitnessCenter = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [
		{
			name: "yoga",
			startsAt: "8:00 AM",
			duration: 60,
		},
		{
			name: "trx",
			startsAt: "11:00 AM",
			duration: 45,
		},
		{
			name: "swimming",
			startsAt: "3:00 PM",
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: "boxing",
			willStartsAt: "6:00 PM",
			duration: 40,
		},
		{
			name: "breath training",
			willStartsAt: "8:00 PM",
			duration: 30,
		},
	],
	currClients: [
		{
			name: "John Smith",
			age: "-",
			gender: "male",
			timeLeft: "1 month",
		},
		{
			name: "Alise Smith",
			age: 35,
			gender: "female",
			timeLeft: "3 month",
		},
		{
			name: "Ann Sonne",
			age: 24,
			gender: "female",
			timeLeft: "5 month",
		},
	],
	exClients: [
		{
			name: "TomSmooth",
			age: 50,
			gender: "male",
			makeCallFor: new Date("2023-08-12"),
		},
	],
	futureClients: [
		{
			name: "Maria",
			makeCallFor: new Date("2023-07-10"),
		},
	],
};
