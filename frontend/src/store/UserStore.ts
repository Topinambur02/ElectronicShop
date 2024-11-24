import { makeAutoObservable } from "mobx";
import { User } from "../types/UserType";

export default class UserStore {
    private _isAuth: boolean
    private _user: User

    constructor () {
        this._isAuth = true;
        // this._user = {} as User;
        this._user = { id: 1, login: 'test', email: 'test@yandex.ru', role: 'ADMIN', password: 'test', avatar: 'avatar.jpg', bucketId: 1 };
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