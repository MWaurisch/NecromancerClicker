(function(){
  'use strict';

  angular
    .module('NecroClicker')
    .controller('AttackController', AttackController);

    AttackController.$inject = ['NecromancyFactory', 'AttackFactory'];

    function AttackController(NecromancyFactory, AttackFactory){

      var vm = this;
      vm.necromancyStatus = NecromancyFactory.necromancyStatus;
      vm.attackStatus = AttackFactory.attackStatus;

      vm.creatureAvailable = creatureAvailable;
      vm.creatureDisabled = creatureDisabled;

      ////////////////////////////////////////////
      ///////////////// functions ////////////////
      ////////////////////////////////////////////

      function creatureAvailable(id){
        return vm.necromancyStatus[id].amount > 0;
      };

      function creatureDisabled(id){
        return vm.necromancyStatus[id].amount > vm.attackStatus[id].amount;
      };

    };

})();
