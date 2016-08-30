(function() {
  'use strict';

  angular
    .module('NecroClicker')
    .controller('NecromancyController', NecromancyController);

    NecromancyController.$inject = ['NecromancyFactory', 'ManaFactory', 'BuildingFactory'];

    function NecromancyController(NecromancyFactory, ManaFactory, BuildingFactory){

      var vm = this;
      vm.necromancyStatus = NecromancyFactory.necromancyStatus;
      vm.manaStatus = ManaFactory.manaStatus;
      vm.buildingStatus = BuildingFactory.buildingStatus;

      vm.increaseCreatureCount = NecromancyFactory.increaseCreatureCount;
      vm.decreaseManaAmount = ManaFactory.decreaseManaAmount;

      vm.requirementsFullfil = requirementsFullfil;
      vm.manaAvailable = manaAvailable;
      vm.getCreature = getCreature;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function requirementsFullfil(id) {
        for (var i = 0; i < 8; i++) {
          if (vm.buildingStatus[i].level < vm.necromancyStatus[id].require[i]){
            return false;
          }
        }
        return true;
      };

      function manaAvailable(id) {
        return (vm.manaStatus.targetamount >= vm.necromancyStatus[id].cost);
      };

      function getCreature(id){
        vm.decreaseManaAmount(vm.necromancyStatus[id].cost);
        vm.increaseCreatureCount(id, 1);
      };

    };

})();
