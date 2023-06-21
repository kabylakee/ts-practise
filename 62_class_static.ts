class PlayerTest {
    private static game: string;

    static {
        PlayerTest.game = setName();
    }

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

    static getGameName() {
        return PlayerTest.game;
    }
}

function setName() {
    return "COD";
}

const playerTest = new PlayerTest();
playerTest.password = 'passqord';
console.log(PlayerTest.getGameName());