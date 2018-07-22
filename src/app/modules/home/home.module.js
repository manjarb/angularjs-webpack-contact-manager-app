import angular from 'angular';
import { HomePageComponent } from "./components/home-page/home-page.component";

export default angular.module('home', [])
            .component('homePage', HomePageComponent)
            .config(($stateProvider) => {
                $stateProvider
                    .state('home', {
                        redirectTo: 'contacts',
                        url: '/home',
                        data: {
                            requiredAuth: true
                        },
                        component: 'homePage'
                    })
            });