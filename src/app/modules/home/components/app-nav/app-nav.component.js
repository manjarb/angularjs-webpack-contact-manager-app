export const AppNavComponent = {
    bindings: {
        user: '<',
        onLogout: '&'
    },
    scope: {},
    template: require('./app-nav.component.html'),
    controller: [
        '$scope',
        class AppNavController {
            constructor($scope) {

            }

            $onInit() {
            }
        }
    ]
};