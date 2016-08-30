(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .factory('NecromancyFactory', NecromancyFactory);

    function NecromancyFactory(){

      // status of summoned necromancy creatures //
      var necromancyStatus = [{
        name: "Skelettkrieger",
        id: 0,
        count: 10,
        attack: 5,
        defence: 4,
        damage: 2,
        lifepoints: 6,
        speed: 4,
        cost: 60,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,1,1,0,0,0,0,0],
      }, {
        name: "Skelettschütze",
        id: 1,
        count: 5,
        attack: 6,
        defence: 2,
        damage: 3,
        lifepoints: 6,
        speed: 5,
        cost: 100,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [2,2,2,0,0,0,0,0],
      }, {
        name: "Zombie",
        id: 2,
        count: 0,
        attack: 7,
        defence: 7,
        damage: 4,
        lifepoints: 20,
        speed: 3,
        cost: 200,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,1,0,0],
      }, {
        name: "Gespenst",
        id: 3,
        count: 0,
        attack: 10,
        defence: 9,
        damage: 7,
        lifepoints: 40,
        speed: 7,
        cost: 360,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,2,1,0],
      }, {
        name: "Todesritter",
        id: 4,
        count: 0,
        attack: 13,
        defence: 10,
        damage: 13,
        lifepoints: 60,
        speed: 9,
        cost: 600,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,3,3,1,0,3,2,0],
      }, {
        name: "Skelettgigant",
        id: 5,
        count: 0,
        attack: 17,
        defence: 15,
        damage: 22,
        lifepoints: 120,
        speed: 6,
        cost: 1200,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,4,4,0,0,4,2,1],
      }, {
        name: "Ghoul",
        id: 6,
        count: 0,
        attack: 24,
        defence: 24,
        damage: 50,
        lifepoints: 200,
        speed: 10,
        cost: 2300,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,2,2,0,0,5,2,2],
      }];

      var factory ={
        // necromancy status //
        necromancyStatus: necromancyStatus,
        // function to manipulate necromancy status //
        increaseCreatureCount: increaseCreatureCount,
        decreaseCreatureCount: decreaseCreatureCount,
      };

      return factory;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function increaseCreatureCount(id, value) {
        necromancyStatus[id].count += value;
      };

      function decreaseCreatureCount(id, value) {
        necromancyStatus[id].count -= value;
      };

    };

})();
