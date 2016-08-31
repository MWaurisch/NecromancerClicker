(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .directive('manaDirective', ManaDirective);

    function ManaDirective(){
      return {
        restrict: 'E',
        templateUrl: 'src/html/manaInterface.html',
      };
    };

})();
