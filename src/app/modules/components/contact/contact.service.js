import * as firebase from 'firebase';
import AuthService from '../../auth/auth.service';
require('firebase/array');

export default class ContactService {
    constructor() {
        this.ref = firebase.storage().contacts;
        this.authService = AuthService.getUser();
        this.uid = this.authService.uid;
    }

    createNewContact(contact) {
        return $firebaseArray(this.ref.child(this.uid)).$add(contact);
    }

    getContactById(id) {
        return $firebaseObject(this.ref.child(this.uid).child(id));
    }

    getContactList() {
        return $firebaseArray(this.ref.child(this.uid));
    }

    updateContact(contact) {
        return contact.$save();
    }

    deleteContact(contact) {
        return contact.$remove();
    }
}