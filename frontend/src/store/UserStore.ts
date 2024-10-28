import { makeAutoObservable } from "mobx";
import { User } from "../types/UserType";

export default class UserStore {
    private _isAuth: boolean
    private _user: User

    constructor () {
        this._isAuth = false;
        this._user = {} as User;
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: User) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

}