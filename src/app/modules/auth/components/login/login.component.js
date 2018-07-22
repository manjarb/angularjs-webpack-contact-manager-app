import angular from 'angular';
import {RegisterComponent} from "../register/register.component";
import {AuthFormComponent} from "../auth-form/auth-form.component";

export const LoginComponent = {
    scope: {},
    template: require('./login.component.html'),
    controller: [
        '$scope',
        class LoginController {
            constructor($scope) {
                this.scope = $scope;
            }
        }
    ]
}

export default angular.module('auth.components', [])
    .component('login', LoginComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('auth', {
                redirectTo: 'auth.login',
                url: '/auth',
                template: '<div ui-view></div>'
            })
            .state('auth.login', {
                url: '/login',
                component: 'login'
            })
        $urlRouterProvider.otherwise('/auth/login')
    })
    .component('register', RegisterComponent)
    .config(($stateProvider) => {
        $stateProvider
            .state('auth.register', {
                url: '/register',
                component: 'register'
            })
    })
    .component('authForm', AuthFormComponent);