(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .directive('customClick', customClick);

    function customClick() {
      return {
        link: function(scope, element, attrs) {
          element.click(function(){
            console.log("Ich wurde geklickt");
          })
        }
      }
    };

})();
