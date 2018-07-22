export const HomePageComponent = {
    scope: {},
    template: require('./home-page.component.html'),
    controller: [
        'AuthService',
        '$scope',
        '$state',
        class LoginController {
            constructor(AuthService, $scope, $state) {
                this.user = AuthService.getUser();
                this.authService = AuthService;
                this.state = $state;
            }

            $onInit() {
            }

            logout() {
                this.authService.logout()
                    .then(() => {
                        this.state.go('auth.login');
                    })
            }
        }
    ]
};