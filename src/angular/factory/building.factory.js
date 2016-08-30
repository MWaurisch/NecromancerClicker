(function() {

  angular
    .module('NecroClicker')
    .factory('BuildingFactory', BuildingFactory);

    function BuildingFactory(){

      var buildingStatus = [{
        name: "Friedhof",
        id: 0,
        level: 1,
        cost: 500,
        max: 3,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,0,0,0,0],
      }, {
        name: "Schmiede",
        id: 1,
        level: 1,
        cost: 500,
        max: 4,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,0,0,0,0,0,0,0],
      }, {
        name: "Kaserne",
        id: 2,
        level: 1,
        cost: 500,
        max: 4,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [1,1,0,0,0,0,0,0],
      }, {
        name: "Ställe",
        id: 3,
        level: 0,
        cost: 2000,
        max: 1,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [3,3,3,0,1,0,0,0],
      }, {
        name: "Burg",
        id: 4,
        level: 0,
        cost: 4000,
        max: 3,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [2,2,2,0,0,0,0,0],
      }, {
        name: "Nekroverstärker",
        id: 5,
        level: 0,
        cost: 1500,
        max: 5,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,1,0,0,0],
      }, {
        name: "Geisterportal",
        id: 6,
        level: 0,
        cost: 5500,
        max: 2,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,2,2,0,0],
      }, {
        name: "Ritualkreis",
        id: 7,
        level: 0,
        cost: 7000,
        max: 2,
        //Friedhof, Schmiede, Kaserne, Ställe, Burg, Nekroverstärker, Geisterportal, Ritualkreis
        require: [0,0,0,0,3,4,0,0],
      }];

      var factory = {
        buildingStatus: buildingStatus,
        increaseBuildingLevel: increaseBuildingLevel,
        increaseBuildingCost: increaseBuildingCost,
      };

      return factory;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function increaseBuildingLevel(id) {
        buildingStatus[id].level++;
      };

      function increaseBuildingCost(id) {
        buildingStatus[id].cost += Math.round(buildingStatus[id].cost * 0.5);
      };
    };

})();
