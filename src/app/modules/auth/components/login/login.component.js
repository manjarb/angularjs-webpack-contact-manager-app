import angular from 'angular';
import {RegisterComponent} from "../register/register.component";
import {AuthFormComponent} from "../auth-form/auth-form.component";

export const LoginComponent = {
    scope: {},
    template: require('./login.component.html'),
    controller: [
        'AuthService',
        '$scope',
        class LoginController {
            constructor(AuthService, $scope) {
                this.scope = $scope;
                this.scope.user = {
                    email: '',
                    password: ''
                };
                this.authService = AuthService;

                this.scope.loginUser = this.loginUser.bind(this);
            }

            $onInit() {
            }

            loginUser(event) {
                console.log('ueueu');
                return this.authService
                    .login(event.user)
                    .then((user) => {
                        console.log('login success');
                    },(err) => {
                        console.log(err);
                    });
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