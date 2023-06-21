const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, {total: number, inMenu: number}> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

enum FiguresName {
	Rect = 'rect',
	Triangle = 'triangle',
	Line = 'line',
	Circle = 'circle',
}

interface Figure {
	name: FiguresName;
}

function calculateAmountOfFigures<T extends Figure>(figures: T[]): AmountOfFigures {
	const objAmount: AmountOfFigures = figures.reduce((acc, figure) => {
		switch(figure.name) {
			case FiguresName.Rect: 
			return {
				...acc, 
				['squares']: acc['squares'] + 1,
			};
			case FiguresName.Triangle: 
			return {
				...acc, 
				['triangles']: acc['triangles'] + 1,
			};
			case FiguresName.Circle: 
			return {
				...acc, 
				['circles']: acc['circles'] + 1,
			};
			default: 
			return {
				...acc, 
				['others']: acc['others'] + 1,
			};
		}
	}, {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	});
	return objAmount;
}

const figuresData = [
	{
		name: FiguresName.Rect,
		data: { a: 5, b: 10 },
	},
	{
		name: FiguresName.Rect,
		data: { a: 6, b: 11 },
	},
	{
		name: FiguresName.Triangle,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FiguresName.Line,
		data: { l: 15 },
	},
	{
		name: FiguresName.Circle,
		data: { r: 10 },
	},
	{
		name: FiguresName.Circle,
		data: { r: 5 },
	},
	{
		name: FiguresName.Rect,
		data: { a: 15, b: 7 },
	},
	{
		name: FiguresName.Triangle,
	},
];

console.log(calculateAmountOfFigures(figuresData));
