interface IUserTest {
    login: string;
    password: string;
    token?: number;
};

interface IUserValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
};

class UserForm implements IUserTest, IUserValidation {
    login: string = '';
    password: string = '';
    valid: boolean = false;

    isValid(login: string): boolean {
        return login.length > 3;
    };
}