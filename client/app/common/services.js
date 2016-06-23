let rolServices = angular.module('rolServices', [])

rolServices.service('rolApi', function() {
    this.getUrl = function(url) {
        return 'http://www.runonlinux.com/' + url;
    }
});

export default rolServices;
