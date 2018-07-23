export const AppSidebarComponent = {
    scope: {},
    template: require('./app-sidebar.component.html'),
    controller: [
        '$scope',
        class AppSidebarController {
            constructor($scope) {
                this.scope = $scope;
                this.scope.contactTags = [{
                    label: 'All contacts',
                    icon: 'star',
                    state: 'none'
                }, {
                    label: 'Friends',
                    icon: 'people',
                    state: 'friends'
                }, {
                    label: 'Family',
                    icon: 'child_care',
                    state: 'family'
                }, {
                    label: 'Acquaintances',
                    icon: 'accessibility',
                    state: 'acquaintances'
                }, {
                    label: 'Following',
                    icon: 'remove_red_eye',
                    state: 'following'
                }];
            }

            $onInit() {
            }
        }
    ]
};