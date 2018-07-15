// Core Styles
import './styles/main.scss';

// Core Angular
import angular from 'angular';

import { AppComponent } from "./app.component";

const dependencies = [];

angular.module('app', dependencies)
    .component('appComponent', AppComponent);