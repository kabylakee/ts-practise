interface IForm {
	login: string;
	password: string;
}

const validationData: ValidData<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};

type ValidData<T> = {
	[K in keyof T]: { isValid: false, errorMsg: string } | { isValid: true };
}