import * as firebase from 'firebase';
require('firebase/auth');

export default class AuthService {
    constructor() {
        this.auth = firebase.auth();
        // console.log(firebase.auth());
        this.authData = null;
        this.register = this.register.bind(this);
        this.storeAuthData = this.storeAuthData.bind(this);
        this.requireAuthentication = this.requireAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.getUser = this.getUser.bind(this);
        this.logout = this.logout.bind(this);
        this.clearAuthData = this.clearAuthData.bind(this);
    }

    register(user) {
        return this.auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(this.storeAuthData)
    }

    login(user) {
        return this.auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(this.storeAuthData)
    }

    storeAuthData(res) {
        this.authData = res;
        return this.authData;
    }

    requireAuthentication() {
        console.log(this.auth.waitForSignIn);
        return this.auth
            .$waitForSignIn().then(this.onSignIn);
    }

    isAuthenticated() {
        return !!this.authData;
    };

    onSignIn(user) {
        this.authData = user;
        return this.auth.$requireSignIn();
    }

    getUser() {
        if (this.authData) {
            return this.authData;
        }
    };

    logout() {
        return this.auth
            .signOut()
            .then(this.clearAuthData);
    }

    clearAuthData() {
        this.authData = null;
    }
}