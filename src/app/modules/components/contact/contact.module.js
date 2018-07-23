import angular from 'angular';
import ContactService from "./contact.service";

export default angular.module('contact', [])
    .component()
    .factory('ContactService', [ContactService]);