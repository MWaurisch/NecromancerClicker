
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

// design of the battleinterface
clickerDirective.directive('battleInterface', function() {
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
        $(element).popover({
            html : true,
            trigger: 'hover',
            placement: 'left',
            delay: {show: 650, hide: 0},
            content: function() {
              var content = $(this).attr("data-popover-content");
              return $(content).children(".popover-body").html();
            },
            title: function() {
              var title = $(this).attr("data-popover-content");
              return $(title).children(".popover-heading").html();
            },
        });
      }
      if (attrs.toggle=="popover"){
        $(element).popover({
          html:true,
          trigger: 'hover',
          placement: 'left',
          delay: {show: 650, hide: 0},
        });
      }
    }
  };
});
