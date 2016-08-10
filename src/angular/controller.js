
var clickerGame = angular.module('clickerGame', ['directive', 'propertyService', 'statusService', 'enemyService']);

///////////// controlls variables //////////////////
clickerGame.controller('ClickerController', function($scope, propertyFactory, statusFactory, enemyFactory) {

    $scope.player = statusFactory.playerStatus;
    $scope.lich = statusFactory.lichStatus;
    $scope.necromancy = statusFactory.necromancyStatus;
    $scope.stronghold = statusFactory.strongholdStatus;
    $scope.attack = statusFactory.attackStatus;
    $scope.enemy = enemyFactory.enemyStatus;

    $scope.update = propertyFactory.updateProperties;
    $scope.undead = propertyFactory.undeadProperties;
    $scope.building = propertyFactory.buildingProperties;
    $scope.human = propertyFactory.humanProperties;

    $(function () {
      $('[data-toggle = "tooltip"]').tooltip()
    });
});

/////////// controlls players mana /////////////////
clickerGame.controller('ManaController', function($scope, $interval) {

    // increase amount of mana by manapersecond from lich upgrades //
    $scope.manaPerSecond = function() {
        $scope.player.mana += $scope.player.manapersecond;
    };

    // call manaPerSecond every second //
    $interval(function() {
        $scope.manaPerSecond();
    }, 1000);

    // add mana by clicking the manapool //
    $scope.getMana = function() {
        $scope.player.mana += $scope.player.manaperclick;
    };
});

/////////// controlls lich status //////////////////
clickerGame.controller('LichController', function($scope) {

    $scope.upgrade = function(id) {
      $scope.player.mana -= $scope.lich[id].cost;
      $scope.lich[id].level++;

      if ($scope.update[id].clicker) {
        $scope.player.manaperclick += $scope.update[id].manaperclick;
        $scope.lich[id].cost += Math.round($scope.lich[id].cost * 0.25);
      }
      else {
        $scope.player.manapersecond += $scope.update[id].manapersecond;
        $scope.lich[id].cost += Math.round($scope.lich[id].cost * 0.15);
      }
    };

    $scope.disabled = function(id) {
      return ($scope.player.mana < $scope.lich[id].cost);
    };
});

//////////// controls size of attack /////////////////
clickerGame.controller('NecromancyController', function($scope) {

    // add a creature and reduce mana by cost //
    $scope.summon = function(id) {
        $scope.player.mana -= $scope.undead[id].cost;
        $scope.necromancy[id].count++;
    };

    $scope.requirements = function(id) {
      for (var i = 0; i < 8; i++) {
        if ($scope.stronghold[i].level < $scope.undead[id].require[i]){
          return false;
        }
      }
      return true;
    };

    $scope.disabled = function(id) {
      return ($scope.player.mana < $scope.undead[id].cost) || !($scope.requirements(id));
    };
});

/////////////// controls aquired building ///////////////////

clickerGame.controller('BuildingController', function($scope) {

    $scope.build = function(id) {
      $scope.player.mana -= $scope.stronghold[id].cost;
      $scope.stronghold[id].cost += Math.round($scope.stronghold[id].cost * 0.5);
      $scope.stronghold[id].level++;
    };

    $scope.requirements = function(id) {
      for (var i = 0; i < 8; i++) {
        if ($scope.stronghold[i].level < $scope.building[id].require[i]){
          return false;
        }
      }
      return true;
    };

    $scope.disabled = function(id) {
      return (($scope.player.mana < $scope.stronghold[id].cost) ||
      ($scope.stronghold[id].level >= $scope.building[id].max) || !($scope.requirements(id)));
    };
});

//////////// controls size of attacking attack /////////////////
clickerGame.controller('AttackController', function($scope) {

    $scope.selectTarget = function(id) {
      $scope.attack.target = id;
    };

    $scope.increase = function(id) {
      $scope.attack.army[id].count++;
    };

    $scope.decrease = function(id) {
      $scope.attack.army[id].count--;
    };

    $scope.all = function(id) {
      $scope.attack.army[id].count = $scope.necromancy[id].count;
    };

    $scope.none = function(id) {
      $scope.attack.army[id].count = 0;
    };

    $scope.increasedisabled = function(id) {
      return $scope.attack.army[id].count >= $scope.necromancy[id].count;
    };

    $scope.decreasedisabled = function(id) {
      return $scope.attack.army[id].count <= 0;
    };

    $scope.available = function(id) {
      return $scope.necromancy[id].count != 0;
    };
});

//////////// controls navigation /////////////////
clickerGame.controller('NavController', function() {
    this.tab = 1;

    // set tab to the selected Tab //
    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    // check which tab is set //
    this.isSelectedTab = function(checkTab) {
        return this.tab === checkTab;
    };
});
