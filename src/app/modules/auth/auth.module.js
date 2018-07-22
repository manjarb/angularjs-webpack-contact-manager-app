import angular from 'angular';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'angularfire';

// Modules
import AuthComponentModule from './components/login/login.component';
import AuthService from "./auth.service";

export default angular.module('auth', [
        'firebase',
        AuthComponentModule.name
    ])
    .config(($firebaseRefProvider) => {
        const config = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID
        };

        $firebaseRefProvider
            .registerUrl({
                default: config.databaseURL,
                contacts: config.databaseURL + '/contacts'
            });

        firebase.initializeApp(config);
    })
    .service('AuthService', ['firebase', AuthService]);