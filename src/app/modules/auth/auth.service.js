import * as firebase from 'firebase'
import 'angularfire';

export default class AuthService {
    constructor() {
        this.auth = firebase.auth();
        // console.log(firebase.auth());
        this.authData = null;
        this.register = this.register.bind(this);
        this.storeAuthData = this.storeAuthData.bind(this);
    }

    register(user) {
        return this.auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(this.storeAuthData)
    }

    storeAuthData(res) {
        this.authData = res;
        return this.authData;
    }
}