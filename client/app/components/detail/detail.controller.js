var moment = require('moment');

class DetailController {
    constructor($scope, $http, $state, $stateParams, Page, rolApi) {
        $scope.results = 'false';
        $scope.refresh = 'false';

        $scope.init = function(response) {
            $scope.title = $stateParams.title;
            $scope.titleID = $stateParams.titleID;
            if ($scope.titleID) {
                $scope.getTitle($scope.titleID)
            }

        }
        var onRequestCompleted = function(response) {
            $scope.program = response.data['data'];
            if(Object.keys($scope.program).length !== 0) {
                $scope.results = 'true';
            } else {
                $scope.results = 'false';
            }
            Page.setPageTitle($scope.program.name);

            var updated = moment($scope.program.updated);
            var now = moment();
            var diff = now.diff(updated, 'hours')

            if (diff > 1) {
              $scope.refresh = 'true';
            }
        }

        $scope.getTitle = function(titleID) {
            if(!isNaN(titleID)) {
                let url = rolApi.getUrl('app/' + titleID);
                $http.get(url).then(onRequestCompleted, onError);
            }
        }
        var onError = function(reason) {
            $scope.error = "Connection problem with server"
        }

        $scope.makeRefresh = function(){
            let url = $scope.url + "refresh/" + $scope.titleID;
            $http.get(url).then(onRefreshCompleted);
        };
        var onRefreshCompleted = function(response) {
            $state.go($state.$current, null, { reload: true });
        }
    }
}

export default DetailController;
