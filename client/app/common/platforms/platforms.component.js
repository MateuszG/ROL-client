import template from './platforms.html';

let platformsComponent = function() {
    return {
        template,
        restrict: 'A',
        scope: {
          'os': "="
        },
    };
};

export default platformsComponent;
