import angular from 'angular';

export default angular.module('auth', [
        'firebase'
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