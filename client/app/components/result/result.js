import angular from 'angular';
import resultComponent from './result.component';

let resultModule = angular.module('result', []).directive('search', resultComponent);

export default resultModule;
