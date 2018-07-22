// import AuthService from "../../auth.service";

export const RegisterComponent = {
    scope: {},
    template: require('./register.component.html'),
    controller: [
        'AuthService',
        '$scope',
        '$state',
        class RegisterController {
            constructor(AuthService, $scope, $state) {
                this.scope = $scope;
                this.state = $state;
                this.scope.user = {
                    email: '',
                    password: ''
                };
                this.authService = AuthService;

                this.scope.createUser = this.createUser.bind(this);
            }

            $onInit() {
            }

            createUser(event) {
                return this.authService
                    .register(event.user)
                    .then((user) => {
                        this.state.go('app');
                    },(err) => {
                        console.log(err);
                    });
            }
        }
    ]
};