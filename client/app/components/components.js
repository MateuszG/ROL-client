import angular from 'angular';
import Result from './result/result';
import Detail from './detail/detail';
import About from './about/about';
import Ask from './ask/ask';

let componentModule = angular.module('app.components', [
    Result.name,
    Detail.name,
    About.name,
    Ask.name
]);

export default componentModule;
