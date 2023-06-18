const formData: IFormData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

const forms = document.querySelectorAll('form') as NodeListOf<HTMLFormElement>;
const email = document.querySelector('#email') as HTMLInputElement;
const title = document.querySelector('#title') as HTMLInputElement;
const text = document.querySelector('#text') as HTMLTextAreaElement;
const checkbox = document.querySelector('#checkbox') as HTMLInputElement;

forms.forEach((form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		formData.email = email.value ?? "";
		formData.title = title.value ?? "";
		formData.text = text.value ?? "";
		formData.checkbox = checkbox.checked ?? false;

		if (validateFormData(formData)) {
			checkFormData(formData);
			console.log(formData);

		}
	})
});

function validateFormData(data: IFormData): boolean {
	if (Object.values(data).every(item => item)) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: IFormData): void {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	if (emails.some(e => email === e)) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}
