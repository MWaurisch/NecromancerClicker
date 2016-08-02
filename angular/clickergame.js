'use strict';

var clickerGame = angular.module('clickerGame', []);

////////////////////////////////////////////////////
/////////////// Controller /////////////////////////
////////////////////////////////////////////////////

///////////// controlls variables //////////////////
clickerGame.controller('ClickerController', function($scope) {

    $scope.player = playerStatus;
    $scope.lich = lichStatus;
    $scope.necromancy = necromancyStatus;
    $scope.stronghold = strongholdStatus;
    $scope.army = armyStatus;

    $scope.update = updateProperties;
    $scope.undead = undeadProperties;
    $scope.buildings = buildingProperties;

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

    $scope.available = function(id) {
      return $scope.player.mana < $scope.lich[id].cost;
    };
});

//////////// controls size of army /////////////////
clickerGame.controller('necromancyController', function($scope) {

    // add a creature and reduce mana by cost //
    $scope.summon = function(id) {
        $scope.player.mana -= $scope.undead[id].cost;
        $scope.necromancy[id].count++;
    };

    $scope.available = function(id) {
      return $scope.player.mana < $scope.undead[id].cost;
    };
});

/////////////// controls aquired buildings ///////////////////

clickerGame.controller('buildingController', function($scope) {

    $scope.build = function(id) {
      $scope.player.mana -= $scope.stronghold[id].cost;
      $scope.stronghold[id].cost += Math.round($scope.stronghold[id].cost * 0.5);
      $scope.stronghold[id].level++;
    }

    $scope.available = function(id) {
      return $scope.player.mana < $scope.stronghold[id].cost;
    }
});

//////////// controls size of attacking army /////////////////
clickerGame.controller('AttackController', function($scope) {

    $scope.increase = function(id) {
      $scope.army[id].count++;
    };

    $scope.decrease = function(id) {
      $scope.army[id].count--;
    };

    $scope.all = function(id) {
      $scope.army[id].count = $scope.necromancy[id].count;
    };

    $scope.none = function(id) {
      $scope.army[id].count = 0;
    };

    $scope.increaseavailable = function(id) {
      return $scope.army[id].count >= $scope.necromancy[id].count;
    };

    $scope.decreaseavailable = function(id) {
      return $scope.army[id].count <= 0;
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

////////////////////////////////////////////////////
/////////////// Directive //////////////////////////
////////////////////////////////////////////////////

// design of all buttons in game //
clickerGame.directive('gameInterface', function() {
    return {
        restrict: 'E',
        templateUrl: 'gameinterface.html',
    };
});

// design of the landscape
clickerGame.directive('landscapeInterface', function() {
    return {
        restrict: 'E',
        templateUrl: '',
    };
});

clickerGame.directive('toggle', function(){
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

////////////////////////////////////////////////////
/////////////// Variables //////////////////////////
////////////////////////////////////////////////////

/////////////////////////////////
// save the status of the game //
/////////////////////////////////

var playerStatus = {
    mana: 120,
    manapersecond: 0,
    manaperclick: 1,
};

var lichStatus = [{
    //Lebenskraft
    id: 0,
    level: 0,
    cost: 15,
}, {
    //Konzentration
    id: 1,
    level: 0,
    cost: 50,
}, {
    //Manafluss
    id: 2,
    level: 0,
    cost: 60,
}, {
    //Meditation
    id: 3,
    level: 0,
    cost: 200,
}, {
    //unheilige Kraft
    id: 4,
    level: 0,
    cost: 240,
}, {
    //Manapool
    id: 5,
    level: 0,
    cost: 800,
}, {
    //Lebensdiebstahl
    id: 6,
    level: 0,
    cost: 960,
}, {
    //Runen
    id: 7,
    level: 0,
    cost: 3200,
}, {
    //Spektralenergie
    id: 8,
    level: 0,
    cost: 3860,
}, {
    //Spektralübergang
    id: 9,
    level: 0,
    cost: 12800,
}, ];

var necromancyStatus = [{
    //Skelettkrieger
    id: 0,
    count: 10,
}, {
    //Skelettschütze
    id: 1,
    count: 5,
}, {
    //Zombie
    id: 2,
    count: 0,
}, {
    //Gespenst
    id: 3,
    count: 0,
}, {
    //Todesritter
    id: 4,
    count: 0,
}, {
    //Skelettgigant
    id: 5,
    count: 0,
}, {
    //Ghoul
    id: 6,
    count: 0,
}, ];

var strongholdStatus = [{
  //Friedhof
  id: 0,
  level: 0,
  cost: 500,
}, {
  //Schmiede
  id: 1,
  level: 0,
  cost: 500,
}, {
  //Kaserne
  id: 2,
  level: 0,
  cost: 500,
}, {
  //Ställe
  id: 3,
  level: 0,
  cost: 2000,
}, {
  //Burg
  id: 4,
  level: 0,
  cost: 4000,
}, {
  //Nekroverstärker
  id: 5,
  level: 0,
  cost: 1500,
}, {
  //Geisterportal
  id: 6,
  level: 0,
  cost: 5500,
}, {
  //Ritualkreis
  id: 7,
  level: 0,
  cost: 7000,
}]

var armyStatus = [{
  //Skelettkrieger
  count: 0,
}, {
  //Skelettschütze
  count: 0,
}, {
  //Zombie
  count: 0,
}, {
  //Gespenst
  count: 0,
}, {
  //Todesritter
  count: 0,
}, {
  //Skelettgigant
  count: 0,
}, {
  //Ghoul
  count: 0,
}, ];

/////////////////////////////////
//// properties of the parts ////
/////////////////////////////////

const updateProperties = [{
    clicker: false,
    manapersecond: 0.1,
    name: "Lebenskraft",
}, {
    clicker: true,
    manaperclick: 0.3,
    name: "Konzentration",
}, {
    clicker: false,
    manapersecond: 0.5,
    name: "Manafluss",
}, {
    clicker: true,
    manaperclick: 0.7,
    name: "Meditation",
}, {
    clicker: false,
    manapersecond: 1.2,
    name: "unheilige Kraft",
}, {
    level: 0,
    clicker: true,
    manaperclick: 1.2,
    name: "Manapool",
}, {
    clicker: false,
    manapersecond: 2.8,
    name: "Lebensdiebstahl",
}, {
    clicker: true,
    manaperclick: 1.8,
    name: "Runen",
}, {
    clicker: false,
    manapersecond: 6,
    name: "Spektralenergie",
}, {
    clicker: true,
    manaperclick: 2.5,
    name: "Spektralübergang",
}, ];

const undeadProperties = [{
    name: "Skelettkrieger",
    attack: 5,
    defence: 4,
    damage: 2,
    lifepoints: 6,
    speed: 4,
    cost: 60,
    require: {
      building0: 1,
      building1: 1,
      building2: 1,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Skelettschütze",
    attack: 6,
    defence: 2,
    damage: 3,
    lifepoints: 6,
    speed: 5,
    cost: 100,
    require: {
      building0: 2,
      building1: 2,
      building2: 2,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Zombie",
    attack: 7,
    defence: 7,
    damage: 4,
    lifepoints: 20,
    speed: 3,
    cost: 200,
    require: {
      building0: 3,
      building1: 2,
      building2: 2,
      building3: 0,
      building4: 0,
      building5: 1,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Gespenst",
    attack: 10,
    defence: 9,
    damage: 7,
    lifepoints: 40,
    speed: 7,
    cost: 360,
    require: {
      building0: 3,
      building1: 2,
      building2: 2,
      building3: 0,
      building4: 0,
      building5: 2,
      building6: 1,
      building7: 0,
    },
}, {
    name: "Todesritter",
    attack: 13,
    defence: 10,
    damage: 13,
    lifepoints: 60,
    speed: 9,
    cost: 600,
    require: {
      building0: 3,
      building1: 3,
      building2: 3,
      building3: 1,
      building4: 0,
      building5: 3,
      building6: 2,
      building7: 0,
    },
}, {
    name: "Skelettgigant",
    attack: 17,
    defence: 15,
    damage: 22,
    lifepoints: 120,
    speed: 6,
    cost: 1200,
    require: {
      building0: 3,
      building1: 4,
      building2: 4,
      building3: 0,
      building4: 0,
      building5: 4,
      building6: 2,
      building7: 1,
    },
}, {
    name: "Ghoul",
    attack: 24,
    defence: 24,
    damage: 50,
    lifepoints: 200,
    speed: 10,
    cost: 2300,
    require: {
      building0: 3,
      building1: 2,
      building2: 2,
      building3: 0,
      building4: 0,
      building5: 5,
      building6: 2,
      building7: 2,
    },
}, ];

const buildingProperties = [{
    name: "Friedhof",
    max: 3,
    require: {
      building0: 0,
      building1: 0,
      building2: 0,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Schmiede",
    max: 4,
    require: {
      building0: 1,
      building1: 0,
      building2: 0,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Kaserne",
    max: 4,
    require: {
      building0: 1,
      building1: 1,
      building2: 0,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Ställe",
    max: 1,
    require: {
      building0: 3,
      building1: 3,
      building2: 3,
      building3: 0,
      building4: 1,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Burg",
    max: 3,
    require: {
      building0: 2,
      building1: 2,
      building2: 2,
      building3: 0,
      building4: 0,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Nekroverstärker",
    max: 5,
    require: {
      building0: 0,
      building1: 0,
      building2: 0,
      building3: 0,
      building4: 1,
      building5: 0,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Geisterportal",
    max: 2,
    require: {
      building0: 0,
      building1: 0,
      building2: 0,
      building3: 0,
      building4: 2,
      building5: 2,
      building6: 0,
      building7: 0,
    },
}, {
    name: "Ritualkreis",
    max: 2,
    require: {
      building0: 0,
      building1: 0,
      building2: 0,
      building3: 0,
      building4: 3,
      building5: 4,
      building6: 0,
      building7: 0,
    },
}]

const humanProperties = [{
    name: "Miliz",
    attack: 4,
    defence: 5,
    damage: 2,
    lifepoints: 10,
    speed: 4,
}, {
    name: "Bogenschütze",
    attack: 6,
    defence: 3,
    damage: 3,
    lifepoints: 10,
    speed: 5,
}, {
    name: "Soldat",
    attack: 6,
    defence: 8,
    damage: 5,
    lifepoints: 25,
    speed: 6,
}, {
    name: "Golem",
    attack: 10,
    defence: 12,
    damage: 6,
    lifepoints: 40,
    speed: 3,
}, {
    name: "Ritter",
    attack: 12,
    defence: 11,
    damage: 12,
    lifepoints: 70,
    speed: 9,
}, {
    name: "Magier",
    attack: 16,
    defence: 16,
    damage: 25,
    lifepoints: 100,
    speed: 6,
}, {
    name: "Koloss",
    attack: 22,
    defence: 28,
    damage: 45,
    lifepoints: 250,
    speed: 5,
}, ];
