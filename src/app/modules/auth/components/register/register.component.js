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
                    email: 'manjarm',
                    password: '11591112'
                };
                this.authService = AuthService;

                this.scope.createUser = this.createUser.bind(this);
            }

            $onInit() {
            }

            createUser(event) {
                console.log('createuser');
                console.log(this.authService);
                /*return this.authService
                    .register(event.user)
                    .then((user) => {
                        console.log(user, 'user registered');
                    },(err) => {
                        console.log(err);
                    });*/
            }
        }
    ]
};