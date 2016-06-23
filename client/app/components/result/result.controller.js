class ResultController {
    constructor($scope, $http, $stateParams) {
        $scope.method = 'GET';
        $scope.url = 'http://runonlinux.com/';
        $scope.results = 'false';

        $scope.title = $stateParams.title;
        $scope.title_id = $stateParams.titleID;
    }
}


export default ResultController;
