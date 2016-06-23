import template from './ask.html';
import controller from './ask.controller';
import './ask.styl';

let askComponent = function() {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default askComponent;
