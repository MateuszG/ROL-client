import angular from 'angular';
import Navbar from './navbar/navbar';
import Platforms from './platforms/platforms';
import rolFilters from './filters';
import rolServices from './services';

function HtmlCtrl($scope, Page) {
  $scope.Page = Page;
}

let commonModule = angular.module('app.common', [
    Navbar.name,
    rolFilters.name,
    Platforms.name,
    rolServices.name,
]).controller('HtmlCtrl', HtmlCtrl);

commonModule.factory('Page', function(){
  var pageTitle = '';

  function getPageTitle(pageTitle) {
    var defaultTitle = 'Run On Linux';

    if (pageTitle) {
      var title = pageTitle + ' - ' + defaultTitle;
    } else {
      var title = defaultTitle;
    };
    return title
  };

  return {
    title: function() { return getPageTitle(pageTitle); },
    setPageTitle: function(newTitle) { pageTitle = newTitle; }
  };
});

export default commonModule;
