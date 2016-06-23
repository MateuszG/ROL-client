import angular from 'angular';
import askComponent from './ask.component';

let askModule = angular.module('ask', []).directive('ask', askComponent);

export default askModule;
