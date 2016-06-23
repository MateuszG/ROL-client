class AskController {
    constructor($scope, $http, $stateParams, Page, rolApi) {
        $scope.results = 'false';

        $scope.init = function(response) {
            $scope.title = $stateParams.title;
            if ($scope.title) {
                $scope.search($scope.title)
            }
        }

        var onRequestCompleted = function(response) {
            $scope.programs = response.data['data'];
            if(Object.keys($scope.programs).length !== 0) {
                $scope.results = 'true';
            } else {
                $scope.results = 'false';
            }
            Page.setPageTitle('Results for "' + $scope.title + '"');
        }

        $scope.search = function(name) {
            if(name && name.length > 2) {
                $http.post(rolApi.getUrl('ask/'), {
                    method: 'POST',
                    name: name
                }).
                then(onRequestCompleted, onError);
            }
            if(name.length <= 2) {
                $scope.results = 'false';
            }
        }

        var onError = function(reason) {
            $scope.error = "Connection problem with server"
        }
    }
}

export default AskController;
