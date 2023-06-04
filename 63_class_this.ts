class PlayerForThis {

    #login!: string;
    private _password!: string;
    public server!: string;
    protected consent!: boolean;

    constructor(login: string) {
        this.#login = login;
    }

    get password(): string {
        return this._password;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }

    logIn = (): string => {
        return `Player ${this.#login} online`;
    }

    connect() {
        return this;
    }

    isPro(): this is AnotherPlayer {
        return this instanceof AnotherPlayer;
    }
}

class AnotherPlayer extends PlayerForThis {
    checkLogin() {
        return this.logIn();
    }
}

const player55 = new PlayerForThis("player55");
// const testPlayer = player55.logIn.bind(player55);
const testPlayer = player55.logIn;
// console.log(testPlayer());
console.log(player55.connect().logIn());


const anotherPlayer55 = new AnotherPlayer("anotherPlayer55");
console.log(anotherPlayer55.checkLogin());
console.log(anotherPlayer55.connect().logIn());


const somePlayer: PlayerForThis | AnotherPlayer = new AnotherPlayer('somePlayer');
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);
