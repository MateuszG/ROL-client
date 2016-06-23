import angular from 'angular';
import platformsComponent from './platforms.component';

let platformsModule = angular.module('platforms', [])
.directive('platforms', platformsComponent);

export default platformsModule;
