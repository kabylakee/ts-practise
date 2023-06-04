class PlayerClass {
    #login!: string;
    private _password!: string;
    public server!: string;
    protected consent!: boolean;

    get password(): string {
        return this._password;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }
}

class CompetetivePlayerClass extends PlayerClass {
    public rank!: number;

    isConsented(): string {
        return this.consent ? "Yes" : "No"
    }
}

const player = new PlayerClass();
player.password = 'passqord';

class UserClass {
    // public email: string;
    // public name: string;

    constructor(public email: string, public name: string) {
        // this.email = email;
        // this.name = name;
    }
}
