import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import HomeController from './controller/homeController';

angular
.module('app',['ui.router'])
.constant('SC', 'd8f0f7883158f792c3a898bbcc8623da')
.config(config)
.controller('HomeController', HomeController)
;

