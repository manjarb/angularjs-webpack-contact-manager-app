// Core Styles
import '../styles/main.scss';

// Core Angular
require('dotenv').config();
import angular from 'angular';
import '@uirouter/angularjs';

// Modules
import CommonModule from './modules/common/common.module';
import ComponentsModule from './modules/components/components.module';
import AuthModule from './modules/auth/auth.module';
import HomeModule from './modules/home/home.module';

import { AppComponent } from "./app.component";

const dependencies = [
    'ui.router',
    AuthModule.name,
    CommonModule.name,
    ComponentsModule.name,
    HomeModule.name
];

angular.module('app', dependencies)
    .component('appComponent', AppComponent);