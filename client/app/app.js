import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

var app = angular.module('app', [
    uiRouter, Common.name, Components.name
])

// app.config([
//     '$locationProvider', function ($locationProvider) {
//         $locationProvider.html5Mode(true);
// }]);

app.config(
    function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider)
    {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('ask', {
                url: '/',
                template: '<ask></ask>'})
            // Results
            .state('results', {
                url: '/find/:title',
                template: '<ask></ask>'})
            .state('results_slash', {
                url: '/find/:title/',
                template: '<ask></ask>'})
            // Detail
            .state('detail', {
                url: '/:title,:titleID',
                template: '<detail></detail>'})
            .state('detail_slash', {
                url: '/:title,:titleID/',
                template: '<detail></detail>'
            })
            // About
            .state('about', {
                url: '/about',
                template: '<about></about>'})
            .state('about_slash', {
                url: '/about/',
                template: '<about></about>'
            });

        $urlMatcherFactoryProvider.caseInsensitive(false);
        $urlMatcherFactoryProvider.strictMode(false);
    }
);
app.directive('app', AppComponent);
