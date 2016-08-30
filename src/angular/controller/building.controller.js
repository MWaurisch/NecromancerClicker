(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .controller('BuildingController', BuildingController);

    BuildingController.$inject = ['BuildingFactory', 'ManaFactory'];

    function BuildingController(BuildingFactory, ManaFactory){
      var vm = this;

      vm.buildingStatus = BuildingFactory.buildingStatus;
      vm.manaStatus = ManaFactory.manaStatus;

      vm.increaseBuildingLevel = BuildingFactory.increaseBuildingLevel;
      vm.increaseBuildingCost = BuildingFactory.increaseBuildingCost;
      vm.decreaseManaAmount = ManaFactory.decreaseManaAmount;

      vm.requirementsFullfil = requirementsFullfil;
      vm.manaAvailable = manaAvailable;
      vm.getBuilding = getBuilding;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function requirementsFullfil(id) {
        for (var i = 0; i < 8; i++) {
          if (vm.buildingStatus[i].level < vm.buildingStatus[id].require[i]){
            return false;
          }
        }
        return true;
      };

      function manaAvailable(id) {
        return (vm.manaStatus.targetamount >= vm.buildingStatus[id].cost);
      };

      function getBuilding(id){
        vm.decreaseManaAmount(vm.buildingStatus[id].cost);
        vm.increaseBuildingCost(id);
        vm.increaseBuildingLevel(id);
      };

    };

})();
