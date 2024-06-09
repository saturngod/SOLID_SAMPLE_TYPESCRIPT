export class User {
    private _username: String;
    private _password: String;

    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    set username(username: String) {
        this._username = username;
    }
    set password(password: String) {
        this._password = password;
    }

}

