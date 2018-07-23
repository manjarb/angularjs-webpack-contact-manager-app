export const ContactComponent = {
    bindings: {
        user: '<',
        onLogout: '&'
    },
    scope: {},
    template: require('./contact.component.html'),
    controller: [
        '$scope',
        class ContactController {
            constructor($scope) {

            }

            $onInit() {
            }
        }
    ]
};