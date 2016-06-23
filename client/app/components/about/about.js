import angular from 'angular';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', []).directive('about', aboutComponent);

export default aboutModule;
