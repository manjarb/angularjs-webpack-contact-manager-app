import angular from 'angular';

export const AuthFormComponent = {
    scope: {},
    bindings: {
        user: '<',
        button: '@',
        message: '@',
        onSubmit: '&'
    },
    template: require('./auth-form.component.html'),
    controller: [
        '$scope',
        class AuthFormController {
            constructor($scope) {
                this.scope = $scope;
                this.$ctrl = this.scope.$ctrl;
                this.scope.submitForm = this.submitForm.bind(this);
            }

            $onInit() {
            }

            $onChanges(changes) {
                if(changes.user) {
                    this.scope.user = angular.copy(this.scope.user)
                }
            }

            submitForm() {
                this.$ctrl.onSubmit({
                    $event: {
                        user: this.scope.user
                    }
                })
            }
        }
    ]
};