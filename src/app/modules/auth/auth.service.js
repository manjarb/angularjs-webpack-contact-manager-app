import 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'angularfire';

export default class AuthService {
    constructor($firebaseAuth) {
        console.log($firebaseAuth);
        this.auth = $firebaseAuth();
        this.authData = null;
        this.register = this.register.bind(this);
        this.storeAuthData = this.storeAuthData.bind(this);
    }

    register(user) {
        return this.auth
            .$createUserWithEmailAndPassword(user.email, user.password)
            .then(this.storeAuthData)
    }

    storeAuthData(res) {
        this.authData = res;
        return this.authData;
    }
}