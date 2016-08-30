(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .directive('statusDirective', StatusDirective);

    function StatusDirective() {
      return {
        restrict: 'E',
        templateUrl: 'src/html/statusInterface.html',
      };
    };

})();
