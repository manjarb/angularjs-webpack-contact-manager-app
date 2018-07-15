// Core Styles
import '../styles/main.scss';

// Core Angular
import angular from 'angular';

// Modules
import CommonModule from './modules/common/common.module';
import ComponentsModule from './modules/components/components.module';
import AuthModule from './modules/auth/auth.module';

import { AppComponent } from "./app.component";

const dependencies = [
    'ui.router',
    AuthModule.name,
    CommonModule.name,
    ComponentsModule.name
];

angular.module('app', dependencies)
    .component('appComponent', AppComponent);