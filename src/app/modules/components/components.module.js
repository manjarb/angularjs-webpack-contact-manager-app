import angular from 'angular';

// Modules
import ContactModule from './contact/contact.module';


export default angular.module('components', [
    ContactModule.name
]);