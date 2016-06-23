let rolFilters = angular.module('rolFilters', []).filter('platform_images', function() {

    return function(platforms) {
        var native_platforms = []

        for(let platform in platforms) {

            if(platforms[platform] == true) {
                native_platforms.push(platform);
            }
        }
        return native_platforms;
    };

});

rolFilters.filter('run_icons', function() {

    return function(status) {
        var status_icons = []

        switch(status) {
          case true:
            status_icons.push('success');
            break;
          case 3:
            status_icons.push('error');
            status_icons.push('wine');
            break;
          case 2:
            status_icons.push('warning');
            status_icons.push('wine');
            break;
          case 1:
            status_icons.push('success');
            status_icons.push('wine');
            break;

          default:
            status_icons.push('question');
            status_icons.push('wine');
        }
        return status_icons;
    };

});

export default rolFilters;
