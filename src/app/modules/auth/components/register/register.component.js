export const RegisterComponent = {
    template: require('./register.component.html'),
    controller: [
        '$scope',
        class RegisterController {
            constructor($scope) {
                this.scope = $scope;
            }
        }
    ]
};