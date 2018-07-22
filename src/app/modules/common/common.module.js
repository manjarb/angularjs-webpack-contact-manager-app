import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-loading-bar';

export default angular.module('common', [
        'ui.router',
        'angular-loading-bar'
    ])
    .run(function ($transitions, cfpLoadingBar) {
        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    });;