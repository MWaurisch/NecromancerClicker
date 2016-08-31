(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .directive('tooltipDirective', TooltipDirective);

    function TooltipDirective(){
      return {
        restrict: 'A',
        link: function(scope, element, attrs){

          if (attrs.toggle=="lichTooltip"){
            var lichValue = scope.$eval(attrs.value);
            $(element).popover({
              html: true,
              trigger: 'hover',
              placement: 'left',
              delay: {show: 650, hide: 0},
              content: '<table>' +
                  '<tr>' +
                      '<td>Name:</td>' +
                      '<td>' + lichValue.name + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Kosten:</td>' +
                      '<td>' + lichValue.cost + '</td>' +
                  '</tr>' +
                '</table>',
            });
          }

          if (attrs.toggle=="necroTooltip"){
            var necroValue = scope.$eval(attrs.value);
            var requirements = scope.$eval(attrs.requirements);
            var buildingName = ['Friedhof', 'Schmiede', 'Kaserne', 'Ställe', 'Burg', 'Nekroverstärker', 'Geisterportal', 'Ritualkreis'];
            var tooltipContent;

            if (requirements){
              tooltipContent = '<table>' +
                  '<tr>' +
                      '<td>Angriff:</td>' +
                      '<td>' + necroValue.attack + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Verteidigung:</td>' +
                      '<td>' + necroValue.defence + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Schaden:</td>' +
                      '<td>' + necroValue.damage + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Lebenspunkte:</td>' +
                      '<td>' + necroValue.lifepoints + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Geschwindigkeit:</td>' +
                      '<td>' + necroValue.speed + '</td>' +
                  '</tr>' +
                '</table>';
            }
            else {
              tooltipContent = 'Anforderungen' +
                  '<table>';

              for (var i = 0; i < 8; i++){
                if (necroValue.require[i] > 0){
                  tooltipContent += '<tr>' +
                      '<td>' + buildingName[i] + ':</td>' +
                      '<td>' + necroValue.require[i] + '</td>' +
                    '</tr>';
                }
              }
              tooltipContent += '</table>';
            }

            $(element).popover({
              html: true,
              trigger: 'hover',
              placement: 'left',
              delay: {show: 650, hide: 0},
              title: necroValue.name,
              content: tooltipContent,
            });
          }

        }
      };
    };

})();
