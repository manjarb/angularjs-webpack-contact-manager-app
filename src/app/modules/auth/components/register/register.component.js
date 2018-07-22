// import AuthService from "../../auth.service";

export const RegisterComponent = {
    scope: {},
    template: require('./register.component.html'),
    controller: [
        'AuthService',
        '$scope',
        class RegisterController {
            constructor(AuthService, $scope) {
                this.scope = $scope;
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

                    },(err) => {
                        console.log(err);
                    });
            }
        }
    ]
};