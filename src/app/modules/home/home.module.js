import angular from 'angular';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';

export default angular.module('home', [])
            .component('homePage', HomePageComponent)
            .component('appNav', AppNavComponent)
            .component('appSidebar', AppSidebarComponent)
            .config(($stateProvider) => {
                $stateProvider
                    .state('home', {
                        url: '/home',
                        data: {
                            requiredAuth: true
                        },
                        component: 'homePage'
                    })
            });