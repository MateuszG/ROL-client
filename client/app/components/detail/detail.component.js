import template from './detail.html';
import controller from './detail.controller';
import './detail.styl';

let detailComponent = function(){
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default detailComponent;
