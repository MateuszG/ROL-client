import template from './result.html';
import controller from './result.controller';
import './result.styl';

let resultComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default resultComponent;