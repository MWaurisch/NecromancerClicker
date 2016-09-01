(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .directive('tooltipDirective', TooltipDirective);

    TooltipDirective.$inject = ['LichFactory', 'NecromancyFactory', 'BuildingFactory'];

    function TooltipDirective(LichFactory, NecromancyFactory, BuildingFactory){
      return {
        restrict: 'A',
        link: function(scope, element, attrs){

          var lichStatus = LichFactory.lichStatus;
          var necromancyStatus = NecromancyFactory.necromancyStatus;
          var buildingStatus = BuildingFactory.buildingStatus;

          if (attrs.toggle=="lichTooltip"){
            var upgradeid = scope.$eval(attrs.upgradeid);

            $(element).popover({
              html: true,
              trigger: 'hover',
              placement: 'left',
              delay: {show: 650, hide: 0},
              title: lichStatus[upgradeid].name,
              content: '<table>' +
                  '<tr>' +
                      '<td>Name:</td>' +
                      '<td>' + lichStatus[upgradeid].name + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Kosten:</td>' +
                      '<td>' + lichStatus[upgradeid].cost + '</td>' +
                  '</tr>' +
                '</table>',
            });
          }

          if (attrs.toggle=="necroTooltip" || attrs.toggle=="attackTooltip"){
            var creatureid = scope.$eval(attrs.creatureid);
            var requirementsFullfil = scope.$eval(attrs.requirements);
            var tooltipContent;

            if (requirementsFullfil){
              tooltipContent = '<table>' +
                  '<tr>' +
                      '<td>Angriff:</td>' +
                      '<td>' + necromancyStatus[creatureid].attack + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Verteidigung:</td>' +
                      '<td>' + necromancyStatus[creatureid].defence + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Schaden:</td>' +
                      '<td>' + necromancyStatus[creatureid].damage + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Lebenspunkte:</td>' +
                      '<td>' + necromancyStatus[creatureid].lifepoints + '</td>' +
                  '</tr>' +
                  '<tr>' +
                      '<td>Geschwindigkeit:</td>' +
                      '<td>' + necromancyStatus[creatureid].speed + '</td>' +
                  '</tr>' +
                '</table>';
            }
            else {
              tooltipContent = 'Anforderungen' +
                  '<table>';

              for (var i = 0; i < 8; i++){
                if (necromancyStatus[creatureid].require[i] > 0){
                  tooltipContent += '<tr>' +
                      '<td>' + buildingStatus[i].name + ':</td>' +
                      '<td>' + necromancyStatus[creatureid].require[i] + '</td>' +
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
              title: necromancyStatus[creatureid].name,
              content: tooltipContent,
            });
          }

          if (attrs.toggle=="buildingTooltip"){
            var buildingid = scope.$eval(attrs.buildingid);
            var requirementsFullfil = scope.$eval(attrs.requirements);
            var tooltipContent;

            if (requirementsFullfil){
              tooltipContent = '<table>' +
                  '<tr>' +
                      '<td>Text:</td>' +
                      '<td>Dieses Gebäude bla</td>' +
                  '</tr>' +
                '</table>';
            }
            else {
              tooltipContent = 'Anforderungen' +
                  '<table>';

              for (var i = 0; i < 8; i++){
                if (buildingStatus[buildingid].require[i] > 0){
                  tooltipContent += '<tr>' +
                      '<td>' + buildingStatus[i].name + ':</td>' +
                      '<td>' + buildingStatus[buildingid].require[i] + '</td>' +
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
              title: buildingStatus[buildingid].name,
              content: tooltipContent,
            });
          }

        }
      };
    };

})();
