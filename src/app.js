/**
 * Created by Monkey on 10/6/2017.
 */
const angular = require('angular');

require('angular-route');
require('angular-ui-bootstrap');
require('jquery/dist/jquery');

import './styles/app.css';

const app = angular.module('music-maker-app', [
    'ngRoute',
    'ui.bootstrap'
]);

import MainController from './controllers/main-controller';
import AuthCallbackController from './controllers/auth-callback-controller';
import SignInController from './controllers/sign-in-controller';

app.controller('MainController', MainController);
app.controller('AuthCallbackController', AuthCallbackController);
app.controller('SignInController', SignInController);


app.config(require('./routes'));

