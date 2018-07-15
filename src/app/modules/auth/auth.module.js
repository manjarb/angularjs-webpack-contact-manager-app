import angular from 'angular';

export default angular.module('auth', [
        'firebase'
    ])
    .config(($firebaseRefProvider) => {
        const config = {
            apiKey: "AIzaSyBwlWZIqkhgBaHG4c6JehZFX-mdqMIKUBI",
            authDomain: "angularjs-contact-manager.firebaseapp.com",
            databaseURL: "https://angularjs-contact-manager.firebaseio.com",
            projectId: "angularjs-contact-manager",
            storageBucket: "angularjs-contact-manager.appspot.com",
            messagingSenderId: "821397040809"
        };

        $firebaseRefProvider
            .registerUrl({
                default: config.databaseURL,
                contacts: config.databaseURL + '/contacts'
            });

        firebase.initializeApp(config);
    })