
var clickerDirective = angular.module('directive', []);

// design of all buttons in game //
clickerDirective.directive('gameInterface', function() {
    return {
        restrict: 'E',
        templateUrl: 'gameinterface.html',
    };
});

// design of the landscape
clickerDirective.directive('landscapeInterface', function() {
    return {
        restrict: 'E',
        templateUrl: '',
    };
});

// enable popover //
clickerDirective.directive('toggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if (attrs.toggle=="tooltip"){
        $(element).tooltip();
      }
      if (attrs.toggle=="popover"){
        $(element).popover({html:true});
      }
    }
  };
});
