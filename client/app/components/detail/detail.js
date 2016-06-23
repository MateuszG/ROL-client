import angular from 'angular';
import detailComponent from './detail.component';

let detailModule = angular.module('detail', []).directive('detail', detailComponent);

export default detailModule;
